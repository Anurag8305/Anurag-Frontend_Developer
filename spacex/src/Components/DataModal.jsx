import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DataModal({ description }) {
	const getData = (description) => {
		axios
			.get(`description`)
			.then((res) => console.log(res).catch((err) => console.log(err)));
	};
	getData();
	const OverlayOne = () => (
		<ModalOverlay
			bg="blackAlpha.300"
			backdropFilter="blur(10px) hue-rotate(90deg)"
		/>
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<>
			<Button
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				Learn More
			</Button>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>Custom backdrop filters!</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
