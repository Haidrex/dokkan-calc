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

const STType2 = ({ id, inputs, setInputs }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>Boost per sphere</FormLabel>
          <Input name="perSphere" />
        </FormControl>
        <FormControl>
          <FormLabel>Spheres obtained</FormLabel>
          <Input name="spheres" />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default STType2;
