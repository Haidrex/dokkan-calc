import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import { SAEffects } from "../../docs/SAEffects";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SuperAttackEffect = ({ handleChange }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <FormControl>
        <FormLabel>12 KI super effect</FormLabel>
        <Select
          mb="10px"
          placeholder="Select option"
          name="superAttackEffect"
          onChange={handleChange}
        >
          {SAEffects.map((effect) => {
            return <option value={effect.value}>{effect.name}</option>;
          })}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>18 KI super effect</FormLabel>
        <Select
          mb="10px"
          placeholder="Select option"
          name="ultraAttackEffect"
          onChange={handleChange}
        >
          {SAEffects.map((effect) => {
            return <option value={effect.value}>{effect.name}</option>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SuperAttackEffect;
