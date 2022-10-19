import { AttackInputs } from "../models/AttackInputs";

const calculateATK = (inputs: AttackInputs) => {
  let atk = inputs.attack;

  //leader
  atk = Math.floor(atk * (1 + inputs.leader / 100));
  console.log(`Leader: ${atk}`);

  //support
  atk = Math.floor(atk * (1 + inputs.support / 100));
  console.log(`Support: ${atk}`);

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
  atk = Math.floor(atk * (1 + inputs.passive / 100));
  console.log(`Passive: ${atk}`);

  //super attack
  atk = Math.floor(atk * 6.95);
  console.log(`Supper attack: ${atk}`);

  return atk;
};

export default calculateATK;
