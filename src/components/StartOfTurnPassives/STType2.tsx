import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { AptInputs } from '../../models/AptInputs';

type Props = {
	id: number;
	inputs: AptInputs;
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>;
};

const STType2 = ({ id, inputs, setInputs }: Props) => {
	return (
		<Box>
			<FormControl>
				<FormLabel>Ki</FormLabel>
				<Input name="ki" />
			</FormControl>
			<FormControl>
				<FormLabel>ATK boost</FormLabel>
				<Input name="atk" />
			</FormControl>
		</Box>
	);
};

export default STType2;
