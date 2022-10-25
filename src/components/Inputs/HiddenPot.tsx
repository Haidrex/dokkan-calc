import { Box, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import Additional from "../../assets/Pot_skill_additional.webp";
import Critical from "../../assets/Pot_skill_critical.webp";
import React from "react";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const HiddenPot = ({ handleChange }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
      display="flex"
      gap="1rem"
    >
      <FormControl display="flex" alignItems="center" gap="1rem">
        <Image src={Additional} alt="Additional" width="50px" height="50px" />
        <Input
          name="additional"
          onChange={handleChange}
          placeholder="Additional"
          type="number"
        />
      </FormControl>
      <FormControl display="flex" alignItems="center" gap="1rem">
        <Image src={Critical} alt="Critical" width="50px" height="50px" />
        <Input
          name="critical"
          onChange={handleChange}
          placeholder="Critical"
          type="number"
        />
      </FormControl>
    </Box>
  );
};

export default HiddenPot;
