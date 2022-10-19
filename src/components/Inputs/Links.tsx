import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { AllLinks } from "../../docs/AllLinks";

type Props = {
  handleChange: (e: any) => void;
};

const Links = ({ handleChange }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <FormControl>
        <FormLabel>Links Active</FormLabel>
        <Select
          isMulti
          name="links"
          options={AllLinks}
          onChange={handleChange}
          placeholder="Select active links..."
          closeMenuOnSelect={false}
        />
      </FormControl>
    </Box>
  );
};

export default Links;
