import { useEffect, useState } from "react";
import dogApi from "../../api/dogApi";
import { Container } from "../../styles/CommonStyles";
import { DogBreeds } from "../../type/dog";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreedSelect = () => {
  // get data
  const [breedData, setBreedData] = useState<DogBreeds[]>([]);
  const [group, setGroup] = useState<Set<string>>();
  // select data
  const [selectGroup, setSelectGroup] = useState("");
  const [selectBreed, setSelectBreed] = useState<DogBreeds[]>([]);

  // get data
  useEffect(() => {
    // get dog breed
    const getDogBreed = async () => {
      try {
        const response = await dogApi.get(`/v1/breeds`);

        // breed group
        setGroup(new Set(response.data
          .map((item: any) => item.breed_group)
          .filter((group: string | undefined) => group && group !== "")
          .sort()
        ));

        // breed info
        const getBreedItems: DogBreeds[] = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          breed_group: item.breed_group ? item.breed_group : "Mixed"
        }));
        setBreedData(getBreedItems);
      } catch {
        console.log("Error!");
      }
    }

    getDogBreed();
  }, []);

  // breed filtering
  useEffect(() => {
    selectGroup === "All" ? setSelectBreed(breedData) : setSelectBreed(breedData.filter((item: DogBreeds) => item.breed_group === selectGroup));
  }, [selectGroup]);

  return (
    <Container>
      {selectGroup === "" ? (
        <ListContainer>
          {group && <li onClick={() => setSelectGroup(`All`)}>All</li>}
          {group && Array.from(group).map(value => (
            <li onClick={() => setSelectGroup(`${value}`)}>{value}</li>
          ))}
        </ListContainer>
      ) : (
        <ListContainer>
          {selectBreed && selectBreed.map(item => (
            <li>
              <Link to={`/breed/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ListContainer>
      )}
    </Container>
  );
}

const ListContainer = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  > li {
    padding: 8px 20px;
    border: 1px solid lightgray;
    border-radius: 4px;
    font-size: 1.6rem;
    color: #444;
    display: inline-block;
    cursor: pointer;
    transition: all .15s linear;

    &:hover, &:active {
      color: crimson;
      border-color: lightcoral;
    }
  }
`

export default BreedSelect;
