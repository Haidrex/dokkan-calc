import { LinkSkill } from "./LinkSkill";

export interface AttackInputs {
  attack: number;
  defence: number;
  leader: number;
  support: number;
  passive: number;
  kiMulti: number;
  links: LinkSkill[];
  saMulti: number;
}
