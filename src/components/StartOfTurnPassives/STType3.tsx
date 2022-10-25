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

const STType3 = ({ id, inputs, setInputs }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>ATK boost</FormLabel>
          <Input name="atk" />
        </FormControl>
        <FormControl>
          <FormLabel>Number of turns</FormLabel>
          <Input name="turns" />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default STType3;