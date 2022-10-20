import React from 'react';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

type Props = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Passive = ({ handleChange }: Props) => {
	return (
		<Box
			border="1px"
			borderColor="gray.200"
			borderRadius={10}
			p="20px"
			mb="10px"
		>
			<FormControl>
				<FormLabel>Passive</FormLabel>
				<Input
					name="passive"
					onChange={handleChange}
					placeholder="Full passive"
				/>
			</FormControl>
		</Box>
	);
};

export default Passive;
