import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { SAMultipliers } from "../../docs/SAMultipliers";
import { SAMultiplier } from "../../models/SAMultiplier";

type Props = {
  handleChange: (multiplier: string) => void;
};

const SuperAttack = ({ handleChange }: Props) => {
  const [selectedMutiplier, setSelectedMultiplier] = useState<SAMultiplier>();

  const handleMultiplierSelect = (name: string) => {
    const selected = SAMultipliers.filter((multiplier) => {
      return multiplier.name === name;
    });
    setSelectedMultiplier(selected[0]);
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <FormControl>
        <FormLabel>Super attack multiplier</FormLabel>
        <RadioGroup name="attack" onChange={handleMultiplierSelect}>
          <Stack direction="row">
            {SAMultipliers.map((multiplier) => {
              return <Radio value={multiplier.name}>{multiplier.name}</Radio>;
            })}
          </Stack>
        </RadioGroup>
      </FormControl>

      {selectedMutiplier ? (
        <FormControl>
          <FormLabel>Select SA level</FormLabel>
          <RadioGroup name="multiplier" onChange={handleChange}>
            <Stack direction="row">
              {selectedMutiplier.SA.map((multiplier) => {
                return (
                  <Radio value={multiplier.value}>{multiplier.name}</Radio>
                );
              })}
            </Stack>
          </RadioGroup>
        </FormControl>
      ) : null}
    </Box>
  );
};

export default SuperAttack;
