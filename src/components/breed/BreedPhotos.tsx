import { useEffect, useState } from "react";
import dogApi from "../../api/dogApi";
import { DogsData } from "../../type/dog";
import DogList from "../common/DogList";
import { Container } from "../../styles/CommonStyles";
import StatusIndicator from "../common/StatusIndicator";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaBackspace } from "react-icons/fa";

const BreedPhotos = () => {
  const { type } = useParams<string>();

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
      const response = await dogApi.get(`/v1/images/search?limit=30&breed_ids=${type}`);

      const getDogListItems: DogsData[] = response.data.map((item: any) => ({
        id: item.id,
        url: item.url,
        width: item.width
      }));
      setDogsData(getDogListItems);
    } catch {
      setErrMsg("Error!");
    } finally {
      setLoading(false);
      clearInterval(timerId);
    }
  }

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <Container>
      {dogsData && (
        <>
          <DogListTotal>검색된 사진 총 {dogsData.length}개</DogListTotal>
          <DogList dogsData={dogsData} />
        </>
      )}

      {loading && <StatusIndicator message={loadingMent} />}
      {errMsg !== null && <StatusIndicator message={errMsg} />}

      {<MoveBtn to="/breed">견종보기<FaBackspace /></MoveBtn>}
    </Container>
  );
}

const MoveBtn = styled(Link)`
  width: 80%;
  max-width: 300px;
  height: 50px;
  line-height: 50px;
  margin: 30px auto 30px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0 2px 4px #aaa;
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 2px;
  color: #555;
  cursor: pointer;
  transition: all .18s linear;

  &:hover, &:active {
    box-shadow: 0 2px 2px #888;
    color: #333;
  }

  & > svg {
    margin-left: 6px;
    margin-bottom: -3px;
  }
`
const DogListTotal = styled.p`
  margin-bottom: 10px;
  color: #333;
`

export default BreedPhotos;
