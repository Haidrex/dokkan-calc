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

const STType3 = ({ id, handleChange }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>ATK boost</FormLabel>
          <Input name="atk" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Number of turns</FormLabel>
          <Input name="turns" onChange={(e) => handleChange(e, id)} />
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
