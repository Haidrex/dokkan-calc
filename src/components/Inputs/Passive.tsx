import { AddIcon } from '@chakra-ui/icons';
import {
	Box,
	FormControl,
	FormLabel,
	IconButton,
	Select,
} from '@chakra-ui/react';
import React from 'react';
import { StartOfTurnPassives } from '../../docs/StartOfTurnPassives';
import { AptInputs } from '../../models/AptInputs';
import { passiveComponent } from '../../services/passiveSelect';
import { replaceItemAtIndex } from '../../utils/utils';
import STType1 from '../StartOfTurnPassives/STType1';
import STType2 from '../StartOfTurnPassives/STType2';

type Props = {
	inputs: AptInputs;
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>;
	addPassive: (e: any) => void;
};

const Passive = ({ inputs, setInputs, addPassive }: Props) => {
	const handleSelectChange = (event: any, id: number) => {
		const newPassives = replaceItemAtIndex(inputs.passive, id - 1, {
			...inputs.passive[id - 1],
			value: event.target.value,
		});

		setInputs({ ...inputs, passive: newPassives });
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
				<FormLabel>Start of turn passive</FormLabel>
				{inputs.passive.map((item) => {
					return (
						<Box>
							<Select
								mb="10px"
								placeholder="Select option"
								onChange={(event) => handleSelectChange(event, item.id)}
							>
								{StartOfTurnPassives.map((passive) => {
									return <option value={passive.value}>{passive.name}</option>;
								})}
							</Select>
							{passiveComponent(item.id, item.value, inputs, setInputs)}
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

export default Passive;
