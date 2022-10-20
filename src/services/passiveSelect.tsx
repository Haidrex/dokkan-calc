import STType1 from '../components/StartOfTurnPassives/STType1';
import STType2 from '../components/StartOfTurnPassives/STType2';
import { AptInputs } from '../models/AptInputs';

export const passiveComponent = (
	id: number,
	type: string,
	inputs: AptInputs,
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>
) => {
	switch (type) {
		case '1':
			return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
		case '2':
			return <STType2 id={id} inputs={inputs} setInputs={setInputs} />;
		default:
			return null;
	}
};
