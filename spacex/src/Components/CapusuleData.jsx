import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Text,
	useColorModeValue,
	Center,
} from "@chakra-ui/react";

import React from "react";

const CapusuleData = ({
	id,
	serial,
	details,
	landings,
	launch,
	unix,
	count,
	status,
	type,
}) => {
	return (
		<Center py={10}>
			<Box
				maxW={"500px"}
				w={"full"}
				bg={useColorModeValue("pink", "gray.800")}
				boxShadow={"5xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Accordion allowMultiple>
					<Text color={"black"}>Capsule Information</Text>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Capsule-id
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{id}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Capsule_Serial
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{serial}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Details
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{details}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Landings
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{landings}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Original Launch
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{launch}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Original Launch Unix
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{unix}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Rreuse Count
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{count}</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Status
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{status}</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Type
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{type}</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Center>
	);
};

export default CapusuleData;
