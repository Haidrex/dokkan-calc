import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

type Props = {
  id: number;
  handleChange: (event: any, id: number) => void;
};

const OSType3 = ({ id, handleChange }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>Per ki raise</FormLabel>
          <Input name="perKi" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Ki raises</FormLabel>
          <Input name="ki" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default OSType3;
