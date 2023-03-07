import {atomWithStorage} from 'jotai/utils';

export type ThemeMode = 'dark' | 'light';

export const appThemeAtom = atomWithStorage<ThemeMode>('theme', 'light');
