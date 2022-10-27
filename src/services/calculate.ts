import { AptInputs } from "../models/AptInputs";
import { AttackInputs } from "../models/AttackInputs";

export const calculateATK = (inputs: AttackInputs): number => {
  let atk = inputs.attack;

  //leader
  atk = Math.floor(atk * (1 + inputs.leader / 100));
  console.log(`Leader: ${atk}`);

  //support
  atk = Math.floor(atk * (1 + inputs.support / 100));
  console.log(`Support: ${atk}`);

  //passive
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

  calculateAvgAtk(inputs);

  apt = Math.floor(apt * (1 + linkBoost));

  return 5;
};

const calculateAvgAtk = (inputs: AptInputs): number => {
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

  if (inputs.ultraAttackEffect !== "0") {
    const startOfTurnBoost = calculateStartOfTurnPassive(inputs);
    const onSuperBoost = caulculateOnSuperPassive(inputs);

    console.log(`startOfTurnBoost: ${startOfTurnBoost}`);
    console.log(`onSuperBoost: ${onSuperBoost}`);

    //ki Multiplier
    apt = Math.floor(apt * (inputs.kiMulti / 100));

    //super attack
    apt = Math.floor(apt * (inputs.saMulti + 0.05 * 15));
  }
  return 3;
};

const calculateStartOfTurnPassive = (inputs: AptInputs): number => {
  const startOfTurnBoost = inputs.passive.reduce((a, b) => {
    if (b.value === "1") {
      return a + Number(b.atk);
    } else if (b.value === "2") {
      return a + Number(b.perSphere) * Number(b.spheres);
    } else if (b.value === "3") {
      return a + Number(b.atk);
    } else if (b.value === "4") {
      return a + Number(b.perEnemy) * Number(b.enemies);
    } else if (b.value === "5") {
      return a + calculateHpBasedPassive(Number(b.hp), Number(b.atk));
    }
    return a;
  }, 0);

  return startOfTurnBoost;
};

const calculateHpBasedPassive = (hp: number, upTo: number): number => {
  const boost = 0.1 + hp * (upTo / 100 - 0.1);
  return boost;
};

const caulculateOnSuperPassive = (inputs: AptInputs): number => {
  const onSuperBoost = inputs.onSuperPassive.reduce((a, b) => {
    if (b.value === "1") {
      return a + Number(b.atk);
    } else if (b.value === "2") {
      return a + Number(b.perAttack) * Number(b.attacks);
    } else if (b.value === "3") {
      return a + Number(b.perKi) * Number(b.ki);
    } else if (b.value === "4") {
      return a + Number(b.perSphere) * Number(b.spheres);
    } else if (b.value === "5") {
      return a + Number(b.perBlow) * Number(b.finalBlows);
    }
    return a;
  }, 0);

  return onSuperBoost;
};
