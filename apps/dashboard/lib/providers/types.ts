import {type EmotionCache} from '@emotion/react';
import {type ReactElement} from 'react';

export type AppThemeProviderProps = {
	children: ReactElement;
	emotionCache?: EmotionCache;
};
