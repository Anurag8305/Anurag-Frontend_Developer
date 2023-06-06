import React, { useState } from "react";
import {
  Container,
  Heading,
  Flex,
  VStack,
  Button,
  Image,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Text,
  Center,
  InputRightElement,
  InputGroup,
  Stack,
  Link,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import {
  ViewIcon,
  ViewOffIcon,
  Search2Icon,
  EmailIcon,
  SettingsIcon
} from "@chakra-ui/icons";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
			.post(`https://reqres.in/api/login`, data)
			.then(res => {
				// alert(res.data.message);
                console.log("email",res);
				localStorage.setItem("token", res.data.token);
				console.log("login", res.data);

				if (res.status==200) {
					// alert(res.data.message);
					toast({
						title: "Successfully Logged In.",
						description: res.data.message,
						status: "success",
						duration: 9000,
						isClosable: true,
					});
					navigate("/");
				} else {
					// alert(res.data.message);
					toast({
						title: "Something Went Wrong.",
						description: res.data.message,
						status: "error",
						duration: 9000,
						isClosable: true,
					});
				}
			})
			.catch(err => {
				console.log(err);
				toast({
					title: "User Not Exists.",
					description: "Invalid Username or Password",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			});
  };

  return (
    <Container maxW="full" p={0}>
      <Flex
        h={{ base: "auto", md: "115vh" }}
        py={0}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Image src="data:image/jpeg;base64,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" alt="mylogo" w={200} />
            <Heading>Sign In</Heading>
            <Button
              _hover={{
                bg: "blue.100",
              }}
              w={"full"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl mb={10} isRequired>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                ></Input>
              </FormControl>
              <FormControl mb={10} isRequired>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Text align={"center"} mb={10}>
                Don't remember your password?{" "}
                <Link
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/forgotpassword")}
                  color={"blue.400"}
                >
                  Forgot password
                </Link>
              </Text>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </form>
            <Text>OR</Text>
            <Button
              _hover={{
                bg: "blue.100",
              }}
              colorScheme="blue.500"
              variant="outline"
              w="full"
            >
              Send One-time Password
            </Button>
            <Text align={"center"}>
              Don't have a SpaceX account?{" "}
              <Link
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
                color={"blue.400"}
              >
                Create an account
              </Link>
            </Text>
          </VStack>
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} bg={"gray.50"}>
          <Heading>SpaceX Account Benefits</Heading>
          <Text color={"gray.500"}>
            My Account is an easy, more centralized way to manage your tech.
            Sign Up Now!
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            columnGap={5}
            rowGap="6"
            w={"full"}
          >
            <GridItem>
              <Search2Icon mb={5} />
              <Text mb={5} fontWeight={500}>
                Order Tracking
              </Text>
              <Text color={"gray.500"}>
                Manage orders, track shipping status and view support history
              </Text>
            </GridItem>
            <GridItem>
              <EmailIcon mb={5} />
              <Text mb={5} fontWeight={500}>
                Manage Communications
              </Text>
              <Text color={"gray.500"}>
                Manage marketing and communications preferences
              </Text>
            </GridItem>
            <GridItem>
              <SettingsIcon mb={5} />
              <Text mb={5} fontWeight={500}>
                Profile Setting
              </Text>
              <Text color={"gray.500"}>
                Save your favorite payment method and shipping details for
                quicker checkout
              </Text>
            </GridItem>
          </SimpleGrid>
          <Image src="data:image/jpeg;base64,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" alt="rocket_img" />
        <Heading>Ready, Set and Launch</Heading>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Login;
