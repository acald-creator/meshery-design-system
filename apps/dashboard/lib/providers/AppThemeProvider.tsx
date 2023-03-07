import {CacheProvider} from '@emotion/react';
import {
	CssBaseline,
	type PaletteMode,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import {blueGrey, grey} from '@mui/material/colors';
import {useAtomValue} from 'jotai';
import {type ReactElement, useMemo} from 'react';

import createEmotionCache from '@/styles/themes/createEmotionCache';

import {type AppThemeProviderProps} from './types';
import {appThemeAtom} from '../theme-atom';

const clientSideEmotionCache = createEmotionCache();

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
		primary: {
			...blueGrey,
			light: '#7F97A2',
			dark: '#435761',
			...(mode === 'dark' && {
				main: '#00B39F',
				dark: '#007D6F',
				light: '#33C2B2',
			}),
		},
		background: {
			default: '#eaeff1',
		},
		secondary: {
			main: '#00B39F',
			light: '#33C2B2',
			dark: '#007D6F',
		},
		...(mode === 'dark' && {
			background: {
				// Default: blueGrey[900],
				// paper: blueGrey[900],
			},
		}),
		text: {
			...(mode === 'light'
				? {
						primary: grey[900],
						secondary: grey[800],
				  }
				: {
						primary: '#fff',
						secondary: grey[500],
				  }),
		},
	},
});

export function AppThemeProvider({
	children,
	emotionCache = clientSideEmotionCache,
}: AppThemeProviderProps): ReactElement {
	const mode = useAtomValue(appThemeAtom);
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
}
