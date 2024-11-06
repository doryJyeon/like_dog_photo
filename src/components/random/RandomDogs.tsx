import { useEffect, useState } from "react";
import dogApi from "../../api/dogApi";
import styled from "styled-components";
import { DogsData } from "../../type/dog";
import DogList from "../common/DogList";
import { Container } from "../../styles/CommonStyles";
import StatusIndicator from "../common/StatusIndicator";

const RandomDogs = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMent, setLoadingMent] = useState<string>("Loading.");
  const [errMsg, setErrMsg] = useState<string | null>();
  const [dogsData, setDogsData] = useState<DogsData[]>([]);

  // get dog list
  const fetchRandomDog = async () => {
    // loading ment 추가용
    const timerId = setInterval(() => {
      setLoadingMent((prev) => prev.length > 10 ? "Loading" : prev + ".");
    }, 1000);

    setLoading(true);
    setErrMsg(null);
    try {
      const response = await dogApi.get(`/v1/images/search?page=${page}&limit=20`);

      const getDogListItems: DogsData[] = response.data.map((item: any) => ({
        id: item.id,
        url: item.url,
        width: item.width
      }));
      setDogsData([...dogsData, ...getDogListItems]);
    } catch {
      setErrMsg("Error!");
    } finally {
      setLoading(false);
      clearInterval(timerId);
    }
  }

  useEffect(() => {
    fetchRandomDog();
  }, [page]);

  return (
    <Container>
      {dogsData && <DogList dogsData={dogsData} />}

      {loading && <StatusIndicator message={loadingMent} />}
      {errMsg !== null && <StatusIndicator message={errMsg} />}

      {loading || <MoreBtn onClick={() => setPage(page + 1)}>사진 더보기</MoreBtn>}
    </Container>
  );
}

const MoreBtn = styled.button`
  width: 80%;
  max-width: 400px;
  height: 50px;
  margin: 30px auto 50px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0 2px 4px #aaa;
  font-size: 2.4rem;
  letter-spacing: 0.5px;
  color: #777;
  cursor: pointer;
  transition: all .18s linear;

  &:hover, &:active {
    box-shadow: 0 2px 2px #888;
    color: #333;
  }
`

export default RandomDogs;
