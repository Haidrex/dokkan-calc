import { AptInputs } from '../models/AptInputs';
import { AttackInputs } from '../models/AttackInputs';

export const calculateATK = (inputs: AttackInputs) => {
	let atk = inputs.attack;

	//leader
	atk = Math.floor(atk * (1 + inputs.leader / 100));
	console.log(`Leader: ${atk}`);

	//support
	atk = Math.floor(atk * (1 + inputs.support / 100));
	console.log(`Support: ${atk}`);

	atk = Math.floor(atk * (1 + inputs.passive / 100));
	console.log(`Passive: ${atk}`);

	//Links
	const linkBoost = inputs.links.reduce((a, b) => {
		return a + b.atkBoost;
	}, 0);

	atk = Math.floor(atk * (1 + linkBoost));
	console.log(`Links: ${atk}`);

	//ki Multiplier
	atk = Math.floor(atk * (inputs.kiMulti / 100));
	console.log(`KiMulti: ${atk}`);

	//passive

	//super attack
	atk = Math.floor(atk * (inputs.saMulti + 0.05 * 15));
	console.log(`Supper attack: ${atk}`);

	return atk;
};

export const calculateAPT = (inputs: AptInputs): number => {
	let apt = inputs.attack;

	//leader
	apt = Math.floor(apt * (1 + inputs.leader / 100));

	//support
	apt = Math.floor(apt * (1 + inputs.support / 100));

	//links
	const linkBoost = inputs.links.reduce((a, b) => {
		return a + b.atkBoost;
	}, 0);
	apt = Math.floor(apt * (1 + linkBoost));
	return 5;
};
