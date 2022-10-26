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
      return <STType1 id={id} handleChange={handleChange} />;
    case "3":
      return <STType1 id={id} handleChange={handleChange} />;
    case "4":
      return <STType1 id={id} handleChange={handleChange} />;
    case "5":
      return <STType1 id={id} handleChange={handleChange} />;
    case "6":
      return <STType2 id={id} handleChange={handleChange} />;
    case "7":
      return <STType3 id={id} handleChange={handleChange} />;
    case "8":
      return <STType1 id={id} handleChange={handleChange} />;
    case "9":
      return <STType1 id={id} handleChange={handleChange} />;
    case "10":
      return <STType4 id={id} handleChange={handleChange} />;
    case "11":
      return <STType1 id={id} handleChange={handleChange} />;
    case "12":
      return <STType5 id={id} handleChange={handleChange} />;
    case "13":
      return <STType1 id={id} handleChange={handleChange} />;
    default:
      return null;
  }
};
