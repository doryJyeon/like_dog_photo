import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { checkLikeDog, dogLikeToggle } from '../../utils/likeDogUtils';
import { DogsData } from '../../type/dog';

const DogImg: React.FC<DogsData> = React.memo(({ id, url, width }) => {
  const [isLike, setIsLike] = useState<boolean>(checkLikeDog(id));

  const newDogLike = () => {
    dogLikeToggle({ id, url, width }, !isLike);
    setIsLike(!isLike);
  }

  return (
    <DogImgBox>
      <img src={url} />
      <LikeDog width={width} className={`${isLike && "active"}`} onClick={() => newDogLike()}>
        <FaRegHeart />
      </LikeDog>
    </DogImgBox>
  );
});

const DogImgBox = styled.figure`
  margin-bottom: 5px;
  position: relative;
  text-align: center;
  transition: transform .18s linear;
  
  > img {
    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 0 7px #666;
    -webkit-user-drag: none;
  }

  &:hover {
    transform: scale(1.08);
    z-index: 3;
  }
`

const LikeDog = styled.div<{ width: number }>`
  position: absolute;
  top: 8px;
  right: ${props => props.width >= 300 ? "7px" : `${(300 - props.width) / 2 + 21}px`};
  opacity: .5;
  font-size: 3rem;
  cursor: pointer;
  transition: color .18s ease-in-out;

  &:hover, &:active {
    color: crimson;
    opacity: .6;
  }

  &.active {
    color: crimson;
    opacity: 1;
  }
`

export default DogImg;
