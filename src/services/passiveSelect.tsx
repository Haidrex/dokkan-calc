import STType1 from '../components/StartOfTurnPassives/STType1';
import STType2 from '../components/StartOfTurnPassives/STType2';
import STType3 from '../components/StartOfTurnPassives/STType3';
import STType4 from '../components/StartOfTurnPassives/STType4';
import STType5 from '../components/StartOfTurnPassives/STType5';
import STType6 from '../components/StartOfTurnPassives/STType6';
import STType7 from '../components/StartOfTurnPassives/STType7';
import STType8 from '../components/StartOfTurnPassives/STType8';
import STType9 from '../components/StartOfTurnPassives/STType9';
import STType10 from '../components/StartOfTurnPassives/STType10';
import STType11 from '../components/StartOfTurnPassives/STType11';
import STType12 from '../components/StartOfTurnPassives/STType12';
import STType13 from '../components/StartOfTurnPassives/STType13';
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
		case '3':
			return <STType3 id={id} inputs={inputs} setInputs={setInputs} />;
		case '4':
			return <STType4 id={id} inputs={inputs} setInputs={setInputs} />;
		case '5':
			return <STType5 id={id} inputs={inputs} setInputs={setInputs} />;
		case '6':
			return <STType6 id={id} inputs={inputs} setInputs={setInputs} />;
		case '7':
			return <STType7 id={id} inputs={inputs} setInputs={setInputs} />;
		case '8':
			return <STType8 id={id} inputs={inputs} setInputs={setInputs} />;
		case '9':
			return <STType9 id={id} inputs={inputs} setInputs={setInputs} />;
		case '10':
			return <STType10 id={id} inputs={inputs} setInputs={setInputs} />;
		case '11':
			return <STType11 id={id} inputs={inputs} setInputs={setInputs} />;
		case '12':
			return <STType12 id={id} inputs={inputs} setInputs={setInputs} />;
		case '13':
			return <STType13 id={id} inputs={inputs} setInputs={setInputs} />;
		default:
			return null;
	}
};
