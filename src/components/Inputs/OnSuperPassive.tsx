import { AddIcon } from '@chakra-ui/icons';
import {
	Box,
	Divider,
	FormControl,
	FormLabel,
	IconButton,
	Select,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { OnSuperPassives } from '../../docs/OnSuperPassives';
import { AptInputs } from '../../models/AptInputs';
import { onSuperComponent } from '../../services/onSuperPassiveSelect';
import { replaceItemAtIndex } from '../../utils/utils';

type Props = {
	inputs: AptInputs;
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>;
	addPassive: (e: any) => void;
};

const OnSuperPassive = ({ inputs, setInputs, addPassive }: Props) => {
	const handleSelectChange = (event: any, id: number) => {
		const newPassives = replaceItemAtIndex(inputs.onSuperPassive, id - 1, {
			...inputs.onSuperPassive[id - 1],
			value: event.target.value,
		});

		setInputs({ ...inputs, onSuperPassive: newPassives });
	};

	return (
		<Box
			border="1px"
			borderColor="gray.200"
			borderRadius={10}
			p="20px"
			mb="10px"
		>
			<FormControl>
				<FormLabel>On super passive</FormLabel>
				{inputs.onSuperPassive.map((item) => {
					return (
						<Box>
							<Text>{`Part: ${item.id}`}</Text>
							<Select
								mb="10px"
								placeholder="Select option"
								onChange={(event) => handleSelectChange(event, item.id)}
							>
								{OnSuperPassives.map((passive) => {
									return <option value={passive.value}>{passive.name}</option>;
								})}
							</Select>
							{onSuperComponent(item.id, item.value, inputs, setInputs)}
							<Divider mt="20px" mb="20px" />
						</Box>
					);
				})}
			</FormControl>
			<Box width="100%" display="flex" justifyContent="center" mt="10px">
				<IconButton icon={<AddIcon />} onClick={addPassive} aria-label="plus" />
			</Box>
		</Box>
	);
};

export default OnSuperPassive;
