import { Container, useDisclosure, Button } from '@chakra-ui/react';
import { MultiValue } from 'chakra-react-select';
import React, { useState } from 'react';
import { AptInputs } from '../../models/AptInputs';
import { LinkSkill } from '../../models/LinkSkill';
import { calculateAPT } from '../../services/calculate';
import AttackModal from '../Attack/AttackModal';
import HiddenPot from '../Inputs/HiddenPot';
import KiMultiplier from '../Inputs/KiMultiplier';
import Leader from '../Inputs/Leader';
import Links from '../Inputs/Links';
import OnSuperPassive from '../Inputs/OnSuperPassive';
import Passive from '../Inputs/Passive';
import SuperAttack from '../Inputs/SuperAttack';
import SuperAttackEffect from '../Inputs/SuperAttackEffect';
import Support from '../Inputs/Support';
import UnitStats from '../Inputs/UnitStats';

type Props = {};

const Apt = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [attack, setAttack] = useState(0);
	const [inputs, setInputs] = useState<AptInputs>({
		attack: 0,
		defence: 0,
		leader: 0,
		support: 0,
		passive: [],
		onSuperPassive: [],
		kiMulti: 0,
		links: [],
		saMulti: 0,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	const handleLinkChange = (newValue: MultiValue<LinkSkill>) => {
		setInputs((values) => ({ ...values, ['links']: newValue }));
	};

	const handleSaMultiChange = (multiplier: string) => {
		setInputs((prev) => ({ ...prev, ['saMulti']: Number(multiplier) }));
	};

	const handleCalculate = () => {
		setAttack(calculateAPT(inputs));
		onOpen();
	};

	const addPassive = (e: any) => {
		setInputs((values) => ({
			...values,
			['passive']: [
				...inputs.passive,
				{ id: inputs.passive.length + 1, value: 0 },
			],
		}));
	};

	const addOnSuperPassive = (e: any) => {
		setInputs((values) => ({
			...values,
			['onSuperPassive']: [
				...inputs.onSuperPassive,
				{ id: inputs.onSuperPassive.length + 1, value: 0 },
			],
		}));
	};

	return (
		<Container textAlign="center" fontSize="xl" mt="20px">
			<UnitStats handleChange={handleChange} />
			<Leader handleChange={handleChange} />
			<Support handleChange={handleChange} />
			<Links handleChange={handleLinkChange} />
			<Passive inputs={inputs} setInputs={setInputs} addPassive={addPassive} />
			<OnSuperPassive
				inputs={inputs}
				setInputs={setInputs}
				addPassive={addOnSuperPassive}
			/>
			<KiMultiplier handleChange={handleChange} />
			<SuperAttack handleChange={handleSaMultiChange} />
			<SuperAttackEffect />
			<HiddenPot handleChange={handleChange} />
			<Button onClick={handleCalculate} mt="20px">
				Calculate
			</Button>
			<AttackModal
				isOpen={isOpen}
				onClose={onClose}
				attack={new Intl.NumberFormat('en-US').format(attack)}
			/>
		</Container>
	);
};

export default Apt;
