import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Spacer,
  Image,
  Box
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Container maxW={"100%"} >
      <Stack
        textAlign={"center"}
        align={"start"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        maxW="7xl"
        mx="auto"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Anurag's {" "}
          <Text as={"span"} color="orange.400">
            Yogastudio
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"2xl"} align="start">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => navigate(ROUTES.SIGNUP)}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started <Spacer width="10px"/> <FaArrowRightLong/>
          </Button>
        </Stack>
      </Stack>
      <Stack maxW="100%" align="center" >

      <Box boxSize="70%"  >
  <Image  src='/assets/homeImg.svg'/>
</Box>
</Stack>
    </Container>
     </>
  );
}
