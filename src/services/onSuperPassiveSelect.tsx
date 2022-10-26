import OSType1 from "../components/OnSuperPassives/OSType1";
import OSType2 from "../components/OnSuperPassives/OSType2";
import OSType3 from "../components/OnSuperPassives/OSType3";
import OSType4 from "../components/OnSuperPassives/OSType4";
import OSType5 from "../components/OnSuperPassives/OSType5";
import { AptInputs } from "../models/AptInputs";

export const onSuperComponent = (
  id: number,
  type: string,
  handleChange: (event: any, id: number) => void
) => {
  switch (type) {
    case "1":
      return <OSType1 id={id} handleChange={handleChange} />;
    case "2":
      return <OSType1 id={id} handleChange={handleChange} />;
    case "3":
      return <OSType1 id={id} handleChange={handleChange} />;
    case "4":
      return <OSType2 id={id} handleChange={handleChange} />;
    case "5":
      return <OSType3 id={id} handleChange={handleChange} />;
    case "6":
      return <OSType4 id={id} handleChange={handleChange} />;
    case "7":
      return <OSType1 id={id} handleChange={handleChange} />;
    case "8":
      return <OSType5 id={id} handleChange={handleChange} />;
    case "9":
      return <OSType1 id={id} handleChange={handleChange} />;
    default:
      return null;
  }
};
