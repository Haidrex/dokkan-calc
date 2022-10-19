import React from "react";

import { Button, Stack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Stack direction="row" textAlign="center">
      <Button>ATK</Button>
      <Button>APT</Button>
      <Button>Defence</Button>
    </Stack>
  );
};

export default NavBar;
