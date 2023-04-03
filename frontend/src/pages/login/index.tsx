import { NextPage } from "next";
import {
  Center,
  Input,
  Button,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const login: NextPage = () => {
  return (
    <Center width={"100vw"} height={"100vh"}>
      <Center
        display={"flex"}
        w={"50%"}
        h={"50%"}
        flexDirection={"column"}
        gap={"2rem"}
        border={"1px solid black"}
        borderRadius={"50px"}
      >
        <h1>Login</h1>
        <form>
          <FormControl display={"flex"} flexDirection={"column"} gap={"1rem"}>
            <FormLabel>Email</FormLabel>
            <Input w={"450px"} placeholder="Insira seu email" />
            <Button
              width={"50%"}
              m={"0 auto"}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Center>
    </Center>
  );
};

export default login;
