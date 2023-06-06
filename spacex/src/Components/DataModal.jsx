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
import { useState } from "react";

export default function DataModal() {
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
					<ModalHeader>SpaceX</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							“You want to wake up in the morning and think the future is going
							to be great - and that’s what being a spacefaring civilization is
							all about. It’s about believing in the future and thinking that
							the future will be better than the past. And I can’t think of
							anything more exciting than going out there and being among the
							stars.” -Elon Musk
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
