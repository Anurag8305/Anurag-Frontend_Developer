import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const handlenavigate = () => {
		navigate("/login");
	};
	const handleHome = () => {
		navigate("/");
	};
	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box onClick={handleHome}>SpaceX</Box>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>
							{token ? (
								<Button
									onClick={handlenavigate}
									backgroundColor={"#0672cb"}
									width={"100%"}
									isDisabled
									color={"white"}
								>
									Login
								</Button>
							) : (
								<Button
									onClick={handlenavigate}
									backgroundColor={"#0672cb"}
									width={"100%"}
									color={"white"}
								>
									Login
								</Button>
							)}
							<Menu>
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"link"}
									cursor={"pointer"}
									minW={0}
								>
									<Avatar
										size={"sm"}
										src={"https://avatars.dicebear.com/api/male/username.svg"}
									/>
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={"https://avatars.dicebear.com/api/male/username.svg"}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Servers</MenuItem>
									<MenuItem>Account Settings</MenuItem>
									<MenuItem onClick={handleLogout}>Logout</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
