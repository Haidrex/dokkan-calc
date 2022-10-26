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

const STType4 = ({ id, handleChange }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>Boost per enemy</FormLabel>
          <Input name="perEnemy" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Number of enemies</FormLabel>
          <Input name="enemies" onChange={(e) => handleChange(e, id)} />
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
