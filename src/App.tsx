import React from 'react';
import {
	ChakraProvider,
	Container,
	theme,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Attack from './components/Attack/Attack';
import Apt from './components/APT/Apt';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Container textAlign="center" fontSize="xl" maxWidth="700px" mt="20px">
				<ColorModeSwitcher />
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
			</Container>
		</ChakraProvider>
	);
}

export default App;
