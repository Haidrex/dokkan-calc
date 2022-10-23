import { Button, FormControl, HStack, Input } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <form>
      <HStack>
        <FormControl>
          <Input type="text" name="search" placeholder="Search" />
        </FormControl>
        <FormControl>
          <Button type="submit">Search</Button>
        </FormControl>
      </HStack>
    </form>
  );
};

export default Search;
