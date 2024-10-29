import React from "react";
import DogImg from "./DogImg";
import styled from "styled-components";
import { DogsData } from "../type/dog";

interface DogsDataProps {
  dogsData: DogsData[]
}

const DogList: React.FC<DogsDataProps> = React.memo(({ dogsData }) => {
  return (
    <DogListContainer>
      {dogsData && dogsData.map((item: any) => (
        <DogImg id={item.id} url={item.url} width={item.width} />
      ))}
    </DogListContainer>
  );
});

const DogListContainer = styled.section`
  column-width: 300px;
  column-gap: 10px;
`

export default DogList;
