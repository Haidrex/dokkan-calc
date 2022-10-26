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

const OSType5 = ({ id, handleChange }: Props) => {
  return (
    <Box>
      <HStack>
        <FormControl>
          <FormLabel>Per final block</FormLabel>
          <Input name="perBlow" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Amount of final blows</FormLabel>
          <Input name="finalBlows" onChange={(e) => handleChange(e, id)} />
        </FormControl>
        <FormControl>
          <FormLabel>Activated</FormLabel>
          <Checkbox name="isActive" />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default OSType5;
