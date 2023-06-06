import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

import {GiApolloCapsule,GiDragonSpiral,GiRocketThruster,GiMissileLauncher} from "react-icons/gi";
import {BiHistory} from "react-icons/bi";
import DataModal from "../Components/DataModal";


const Card = ({ heading, description, icon, href }) => {
  const handleModal=()=>{
    <DataModal />
  }
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			p={5}
		>
			<Stack align={"start"} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"black"}
					rounded={"full"}
					bg={useColorModeValue("gray.100", "gray.700")}
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading size="md">{heading}</Heading>
					<Text mt={1} fontSize={"sm"}>
						{description}
					</Text>
				</Box>
				<Button variant={"link"} colorScheme={"blue"} size={"sm"} onClick={handleModal}>
					<DataModal link={description} />
				</Button>
			</Stack>
		</Box>
	);
};

export default function HomePage() {
	return (
		<Box p={4}>
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
					RECENT LAUNCH - CRS-28 MISSION
				</Heading>
				<Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
					The Space Exploration Technologies Corporation, commonly referred to
					as SpaceX is an American spacecraft manufacturer, launcher, and
					satellite communications company headquartered in Hawthorne,
					California. It was founded in 2002 by Elon Musk with the goal of
					reducing space transportation costs to colonization of Mars.
				</Text>
			</Stack>

			<Container maxW={"5xl"} mt={12}>
				<Flex flexWrap="wrap" gridGap={6} justify="center">
					<Card
						heading={"Capusules"}
						icon={<Icon as={GiApolloCapsule} w={10} h={10}  />}
						description={"https://api.spacexdata.com/v3/capsules"}
						href={"https://api.spacexdata.com/v3/capsules"}
					/>
					<Card
						heading={"Dragons"}
						icon={<Icon as={GiDragonSpiral} w={10} h={10} />}
						description={"https://api.spacexdata.com/v3/dragons"}
						href={"https://api.spacexdata.com/v3/dragons"}
					/>
					<Card
						heading={"Rockets"}
						icon={<Icon as={GiRocketThruster} w={10} h={10} />}
						description={"https://api.spacexdata.com/v3/rockets"}
						href={"https://api.spacexdata.com/v3/rockets"}
					/>
					<Card
						heading={"Launches"}
						icon={<Icon as={GiMissileLauncher} w={10} h={10} />}
						description={"https://api.spacexdata.com/v3/launches"}
						href={"https://api.spacexdata.com/v3/launches"}
					/>
					<Card
						heading={"History"}
						icon={<Icon as={BiHistory} w={10} h={10} />}
						description={"https://api.spacexdata.com/v3/history"}
						href={"https://api.spacexdata.com/v3/history"}
					/>
				</Flex>
			</Container>
		</Box>
	);
}
