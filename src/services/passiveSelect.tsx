import STType1 from "../components/StartOfTurnPassives/STType1";
import STType2 from "../components/StartOfTurnPassives/STType2";
import STType3 from "../components/StartOfTurnPassives/STType3";
import STType4 from "../components/StartOfTurnPassives/STType4";
import STType5 from "../components/StartOfTurnPassives/STType5";
import { AptInputs } from "../models/AptInputs";

export const passiveComponent = (
  id: number,
  type: string,
  handleChange: (event: any, id: number) => void
) => {
  switch (type) {
    case "1":
      return <STType1 id={id} handleChange={handleChange} />;
    case "2":
      return <STType2 id={id} handleChange={handleChange} />;
    case "3":
      return <STType3 id={id} handleChange={handleChange} />;
    case "4":
      return <STType4 id={id} handleChange={handleChange} />;
    case "5":
      return <STType5 id={id} handleChange={handleChange} />;
    default:
      return null;
  }
};
