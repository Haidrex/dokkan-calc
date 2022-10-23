import { Box } from "@chakra-ui/react";
import React from "react";
import CharacterItem from "./CharacterItem";

type Props = {
  characters: { imageUrl: string; name: string }[];
};

const CharacterList = ({ characters }: Props) => {
  return (
    <Box>
      {characters.map((character) => (
        <CharacterItem name={character.name} imageUrl={character.imageUrl} />
      ))}
    </Box>
  );
};

export default CharacterList;
