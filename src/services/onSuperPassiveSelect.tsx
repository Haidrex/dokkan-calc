import OSType1 from '../components/OnSuperPassives/OSType1';
import OSType2 from '../components/OnSuperPassives/OSType2';
import OSType3 from '../components/OnSuperPassives/OSType3';
import OSType4 from '../components/OnSuperPassives/OSType4';
import OSType5 from '../components/OnSuperPassives/OSType5';
import { AptInputs } from '../models/AptInputs';

export const onSuperComponent = (
	id: number,
	type: string,
	inputs: AptInputs,
	setInputs: React.Dispatch<React.SetStateAction<AptInputs>>
) => {
	switch (type) {
		case '1':
			return <OSType1 id={id} inputs={inputs} setInputs={setInputs} />;
		case '2':
			return <OSType1 id={id} inputs={inputs} setInputs={setInputs} />;
		case '3':
			return <OSType1 id={id} inputs={inputs} setInputs={setInputs} />;
		case '4':
			return <OSType2 id={id} inputs={inputs} setInputs={setInputs} />;
		case '5':
			return <OSType3 id={id} inputs={inputs} setInputs={setInputs} />;
		case '6':
			return <OSType4 id={id} inputs={inputs} setInputs={setInputs} />;
		case '7':
			return <OSType1 id={id} inputs={inputs} setInputs={setInputs} />;
		case '8':
			return <OSType5 id={id} inputs={inputs} setInputs={setInputs} />;
		case '9':
			return <OSType1 id={id} inputs={inputs} setInputs={setInputs} />;
		default:
			return null;
	}
};
