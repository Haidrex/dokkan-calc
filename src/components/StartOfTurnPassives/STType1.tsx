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

const STType1 = ({ id, handleChange }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>ATK boost</FormLabel>
          <Input name="atk" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" onChange={(e) => handleChange(e, id)} />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default STType1;
