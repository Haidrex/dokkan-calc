import STType1 from "../components/StartOfTurnPassives/STType1";
import STType2 from "../components/StartOfTurnPassives/STType2";
import STType3 from "../components/StartOfTurnPassives/STType3";
import STType4 from "../components/StartOfTurnPassives/STType4";
import STType5 from "../components/StartOfTurnPassives/STType5";
import { AptInputs } from "../models/AptInputs";

export const passiveComponent = (
  id: number,
  type: string,
  inputs: AptInputs,
  setInputs: React.Dispatch<React.SetStateAction<AptInputs>>
) => {
  switch (type) {
    case "1":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "2":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "3":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "4":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "5":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "6":
      return <STType2 id={id} inputs={inputs} setInputs={setInputs} />;
    case "7":
      return <STType3 id={id} inputs={inputs} setInputs={setInputs} />;
    case "8":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "9":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "10":
      return <STType4 id={id} inputs={inputs} setInputs={setInputs} />;
    case "11":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    case "12":
      return <STType5 id={id} inputs={inputs} setInputs={setInputs} />;
    case "13":
      return <STType1 id={id} inputs={inputs} setInputs={setInputs} />;
    default:
      return null;
  }
};
