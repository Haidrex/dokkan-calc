import { MultiValue } from 'chakra-react-select';
import { LinkSkill } from './LinkSkill';

export interface AptInputs {
	attack: number;
	defence: number;
	leader: number;
	support: number;
	passive: Array<any>;
	onSuperPassive: Array<any>;
	kiMulti: number;
	links: MultiValue<LinkSkill>;
	saMulti: number;
}
