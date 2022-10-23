import React, { useState } from "react";
import {
  ChakraProvider,
  theme,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Attack from "./components/Attack/Attack";
import Apt from "./components/APT/Apt";
import Search from "./components/Characters/Search";
import CharacterList from "./components/Characters/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Box
        textAlign="center"
        fontSize="xl"
        mt="20px"
        max-width="1440px"
        display="flex"
        justifyContent="center"
      >
        <Box display="flex" width="100%" justifyContent="space-around">
          <Tabs size="lg" align="center">
            <TabList>
              <Tab>Attack</Tab>
              <Tab>APT</Tab>
              <Tab>Defence</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Attack />
              </TabPanel>
              <TabPanel>
                <Apt />
              </TabPanel>
              <TabPanel>Defence</TabPanel>
            </TabPanels>
          </Tabs>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Search />
            <CharacterList characters={characters} />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
