import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { AptInputs } from "../../models/AptInputs";

type Props = {
  id: number;
  inputs: AptInputs;
  setInputs: React.Dispatch<React.SetStateAction<AptInputs>>;
};

const STType4 = ({ id, inputs, setInputs }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>Boost per enemy</FormLabel>
          <Input name="perEnemy" />
        </FormControl>
        <FormControl>
          <FormLabel>Number of enemies</FormLabel>
          <Input name="enemies" />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" />
        </FormControl>
      </HStack>
    </Box>
  );
};

// a818e84d-6be4-444d-9045-f0c6c1d7add1

export default STType4;
