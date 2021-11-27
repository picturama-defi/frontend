import { Button, Flex } from "@chakra-ui/react";
import { fundProject, claim } from "../../API/contract/main";

function StakingButtons({ id, setLoading, fetchFilm }: any) {
  const handleClick = async () => {
    setLoading(true);
    await fundProject(id);
    setLoading(false);
    fetchFilm();
  };

  const handleClaimClick = async () => {
    setLoading(true);
    await claim(id);
    setLoading(false);
    fetchFilm();
  };

  return (
    <Flex justifyContent="space-around" p="5" flexDirection="row">
      <Button onClick={handleClick} width="25%" variant="brand2">
        STAKE
      </Button>
      <Button width="25%" ml="2" variant="brand2">
        WITHDRAW
      </Button>
      <Button onClick={handleClaimClick} width="25%" ml="2" variant="brand2">
        CLAIM
      </Button>
    </Flex>
  );
}

export default StakingButtons;
