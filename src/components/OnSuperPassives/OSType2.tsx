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

const OSType2 = ({ id, inputs, setInputs }: Props) => {
	return (
		<Box>
			<HStack>
				<FormControl>
					<FormLabel>Boost per attack</FormLabel>
					<Input name="perAttack" />
				</FormControl>
				<FormControl>
					<FormLabel>Attacks received</FormLabel>
					<Input name="attacks" />
				</FormControl>
				<FormControl>
					<FormLabel>Activated</FormLabel>
					<Checkbox name="isActive" />
				</FormControl>
			</HStack>
		</Box>
	);
};

export default OSType2;
