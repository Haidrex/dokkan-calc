import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  imageUrl: string;
  name: string;
};

const CharacterItem = ({ imageUrl, name }: Props) => {
  return (
    <Box>
      <Image src="imageUrl" />
      <Text>{name}</Text>
    </Box>
  );
};

export default CharacterItem;
