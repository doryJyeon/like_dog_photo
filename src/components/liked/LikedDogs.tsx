import { useEffect, useState } from "react";
import { DogsData } from "../../type/dog";
import DogList from "../common/DogList";
import { getLikeDog } from "../../utils/likeDogUtils";
import { Container } from "../../styles/CommonStyles";
import StatusIndicator from "../common/StatusIndicator";

const LikedDogs = () => {
  const [likeDogs, setLikeDogs] = useState<DogsData[]>([]);

  useEffect(() => {
    const likeData = getLikeDog();
    likeData && setLikeDogs(likeData);
  }, []);

  return (
    <Container>
      {likeDogs.length > 0 && <DogList dogsData={likeDogs} />}
      {likeDogs.length <= 0 && <StatusIndicator message="No liked photos!" />}
    </Container>
  );
}

export default LikedDogs;
