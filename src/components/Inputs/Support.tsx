import React from "react";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Support = ({ handleChange }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <FormControl>
        <FormLabel>Support</FormLabel>
        <Input
          name="support"
          onChange={handleChange}
          placeholder="Percentage boost"
        />
      </FormControl>
    </Box>
  );
};

export default Support;
