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

const OSType3 = ({ id, inputs, setInputs }: Props) => {
	return (
		<Box>
			<HStack>
				<FormControl>
					<FormLabel>Per ki raise</FormLabel>
					<Input name="perKi" />
				</FormControl>
				<FormControl>
					<FormLabel>Ki raises</FormLabel>
					<Input name="ki" />
				</FormControl>
				<FormControl>
					<FormLabel>Activated</FormLabel>
					<Checkbox name="isActive" />
				</FormControl>
			</HStack>
		</Box>
	);
};

export default OSType3;
