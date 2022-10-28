import { AptInputs } from "../models/AptInputs";
import { AttackInputs } from "../models/AttackInputs";
import { SAEffects } from "../docs/SAEffects";
import SuperAttackEffect from "../components/Inputs/SuperAttackEffect";

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

  //super attack
  atk = Math.floor(atk * (inputs.saMulti + 0.05 * 15));
  console.log(`Supper attack: ${atk}`);

  //ki Multiplier
  atk = Math.floor(atk * (inputs.kiMulti / 100));
  console.log(`KiMulti: ${atk}`);

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
  let ultraSuperAttack = 0;
  let superAttack = 0;
  //get the super attack effect
  const saEffect = SAEffects.find(
    (x) => x.value === Number(inputs.superAttackEffect)
  );

  //get the ultra super attack effect
  const ultraSaEffect = SAEffects.find(
    (x) => x.value === Number(inputs.ultraAttackEffect)
  );

  //leader
  apt = Math.floor(apt * (1 + inputs.leader / 100));

  //support
  apt = Math.floor(apt * (1 + inputs.support / 100));

  //links
  const linkBoost = inputs.links.reduce((a, b) => {
    return a + b.atkBoost;
  }, 0);
  apt = Math.floor(apt * (1 + linkBoost));

  //passive
  const startOfTurnBoost = calculateStartOfTurnPassive(inputs);
  const onSuperBoost = caulculateOnSuperPassive(inputs);

  console.log(`startOfTurnBoost: ${startOfTurnBoost}`);
  console.log(`onSuperBoost: ${onSuperBoost}`);

  apt = Math.floor(apt * (1 + (startOfTurnBoost + onSuperBoost) / 100));
  console.log(`Passive: ${apt}`);

  //ultra super attack calculation
  if (ultraSaEffect?.value !== 0) {
    //super attack
    if (ultraSaEffect?.activatesOnSameTurn === true) {
      ultraSuperAttack = Math.floor(
        apt * (inputs.saMulti + (0.05 * 15 + ultraSaEffect?.boost))
      );
    } else {
      ultraSuperAttack = Math.floor(apt * (inputs.saMulti + 0.05 * 15));
    }

    //ki Multiplier
    ultraSuperAttack = Math.floor(apt * (inputs.kiMulti / 100));
  }

  //super attack calculation

  if (saEffect?.activatesOnSameTurn === true) {
    superAttack = Math.floor(
      apt * (inputs.saMulti + (0.05 * 15 + saEffect?.boost))
    );
  } else {
    superAttack = Math.floor(apt * (inputs.saMulti + 0.05 * 15));
  }

  //ki Multiplier
  superAttack = Math.floor(apt * (inputs.kiMulti / 100));

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
