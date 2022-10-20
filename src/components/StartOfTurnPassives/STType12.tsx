import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	Input,
} from '@chakra-ui/react';
import React from 'react';
import { AptInputs } from '../../models/AptInputs';

type Props = {
	id: number;
	inputs: AptInputs;
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>;
};

const STType12 = ({ id, inputs, setInputs }: Props) => {
	return (
		<Box>
			<HStack>
				<FormControl>
					<FormLabel>Boost up to</FormLabel>
					<Input name="atk" />
				</FormControl>
				<FormControl>
					<FormLabel>HP remaining</FormLabel>
					<Input name="hp" />
				</FormControl>
				<FormControl>
					<FormLabel>Activated</FormLabel>
					<Checkbox name="isActive" />
				</FormControl>
			</HStack>
		</Box>
	);
};

export default STType12;
