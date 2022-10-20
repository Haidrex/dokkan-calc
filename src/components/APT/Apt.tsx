import { Container, useDisclosure, Button } from '@chakra-ui/react';
import { MultiValue } from 'chakra-react-select';
import React, { useState } from 'react';
import { AttackInputs } from '../../models/AttackInputs';
import { LinkSkill } from '../../models/LinkSkill';
import calculateATK from '../../services/calculate';
import AttackModal from '../Attack/AttackModal';
import KiMultiplier from '../Inputs/KiMultiplier';
import Leader from '../Inputs/Leader';
import Links from '../Inputs/Links';
import SuperAttack from '../Inputs/SuperAttack';
import Support from '../Inputs/Support';
import UnitStats from '../Inputs/UnitStats';

type Props = {};

const Apt = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [attack, setAttack] = useState(0);
	const [inputs, setInputs] = useState<AttackInputs>({
		attack: 0,
		defence: 0,
		leader: 0,
		support: 0,
		passive: 0,
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
		setAttack(calculateATK(inputs));
		onOpen();
	};

	return (
		<Container textAlign="center" fontSize="xl" mt="20px">
			<UnitStats handleChange={handleChange} />
			<Leader handleChange={handleChange} />
			<Support handleChange={handleChange} />
			<Links handleChange={handleLinkChange} />
			<KiMultiplier handleChange={handleChange} />
			<SuperAttack handleChange={handleSaMultiChange} />
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
