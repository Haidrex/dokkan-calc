import React from 'react';
import { AttackInputs } from '../../models/AttackInputs';

type Props = {
	inputs: AttackInputs;
	setInputs: React.Dispatch<React.SetStateAction<AttackInputs>>;
	addPassive: (passive: number) => void;
};

const Passive = ({ inputs, setInputs, addPassive }: Props) => {
	return <div>Passive</div>;
};

export default Passive;
