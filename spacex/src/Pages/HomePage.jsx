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
import { Select } from "@chakra-ui/react";

import {
	GiApolloCapsule,
	GiDragonSpiral,
	GiRocketThruster,
	GiMissileLauncher,
} from "react-icons/gi";
import { BiHistory } from "react-icons/bi";
import DataModal from "../Components/DataModal";
import { useEffect, useState } from "react";
import axios from "axios";
import CapusuleData from "../Components/CapusuleData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Action";

const Card = ({ heading, description, icon, href }) => {
	const handleModal = (description) => {
		<DataModal description={description} />;
	};
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			backgroundImage={
				"https://cdn.pixabay.com/photo/2019/03/12/17/18/trees-4051288_640.jpg"
			}
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
				<Button
					variant={"link"}
					colorScheme={"blue"}
					size={"sm"}
					onClick={() => handleModal(description)}
				>
					<DataModal />
				</Button>
			</Stack>
		</Box>
	);
};

export default function HomePage() {
  const dispatch=useDispatch();
  const {products}=useSelector(store=>store.ProductReducer);
  console.log(products);

	const [data, setData] = useState([]);
	const [page, setPage] = useState([]);
	const getData = (page, limit) => {
		axios
			.get(`https://api.spacexdata.com/v3/capsules/?page={page}&limit=${limit}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// const createButton = (length, limit) => {
	// 	let count = Math.ceil(length / limit);
	// 	for (let i = 0; i < count; i++) {
	// 		setPage(...page, i + 1);
	// 	}
	// 	console.log(page);
	// };
	// const PaginatedData = (clicked_btn, limit) => {
	// 	axios
	// 		.get(`https://api.spacexdata.com/v3/capsules/?page={page}&limit=${limit}`)
	// 		.then((res) => {
	// 			setData(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
  const handleStatus=(e)=>{
    axios
    .get(`https://api.spacexdata.com/v3/capsules/?status=${e}`)
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const handleType=(e)=>{
    console.log(e);
    axios
    .get(`https://api.spacexdata.com/v3/capsules/?type=${e}`)
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
	useEffect(() => {
		 getData(1, 5);
    dispatch(getProducts)
	}, []);
	return (
		<>
			<Box
				p={4}
				backgroundImage={
					"https://cdn.pixabay.com/photo/2019/03/12/17/18/trees-4051288_640.jpg"
				}
				backgroundRepeat={"no-repeat"}
				backgroundSize={"100%"}
			>
				<Stack spacing={4} as={Container} textAlign={"center"}>
					<Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
						RECENT LAUNCH - CRS-28 MISSION
					</Heading>
					<Text color={"white"} fontSize={{ base: "sm", sm: "lg" }}>
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
							icon={<Icon as={GiApolloCapsule} w={10} h={10} />}
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
			<Box p={4} backgroundColor={"skyblue"}>
				<Stack spacing={4} as={Container} maxW={"7xl"} textAlign={"center"}>
					<Select placeholder="Status" onChange={(e)=>handleStatus(e.target.value)}>
						<option value="active">Active</option>
						<option value="retired">Retired</option>
					</Select>
					<Select placeholder="Original Launch">
						<option value="option1">Ascending</option>
						<option value="option2">Descending</option>
					</Select>
					<Select placeholder="Type" onChange={(e)=>handleType(e.target.value)}>
						<option value="Dragon 1.0">Dragon 1.0</option>
						<option value="Dragon 1.1">Dragon 1.1</option>
						<option value="Dragon 2.0">Dragon 2.0</option>
					</Select>
					<Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
						Capsules Data
					</Heading>
					<Container maxW={"8xl"} mt={12}>
						<Flex flexWrap="wrap" gridGap={6} justify="center">
							{data.map((el) => {
								return (
									<CapusuleData
										id={el.capsule_id}
										serial={el.capsule_serial}
										details={el.details}
										landings={el.landings}
										launch={el.original_launch}
										unix={el.original_launch_unix}
										count={el.reuse_count}
										status={el.status}
										type={el.type}
									/>
								);
							})}
						</Flex>
					</Container>
				</Stack>
			</Box>
		</>
	);
}
