import {Container, Stack} from '@mui/material';
import {Provider} from 'jotai';
import type {AppProps} from 'next/app';
import Head from 'next/head';

import ModeToggleButton from '@/components/ModeToggleButton';
import {AppThemeProvider} from '@/lib/providers/AppThemeProvider';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<title>Meshery</title>
			</Head>
			<Provider>
				<AppThemeProvider>
					<Container maxWidth={false} disableGutters sx={{minHeight: '100%'}}>
						<Stack spacing={0} direction='row' justifyContent='flex-end'>
							<ModeToggleButton />
						</Stack>
						<Stack>
							<Component {...pageProps} />
						</Stack>
					</Container>
				</AppThemeProvider>
			</Provider>
		</>
	);
}
