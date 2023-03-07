import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconButton} from '@mui/material';
import {useAtom} from 'jotai';
import {type ReactElement} from 'react';

import {type ThemeMode, appThemeAtom} from '@/lib/theme-atom';

type DynamicIconProps = {
	mode: ThemeMode;
};

function DynamicIcon({mode}: DynamicIconProps): ReactElement {
	if (mode === 'dark') {
		return <DarkModeIcon />;
	}

	return <LightModeIcon />;
}

function ModeToggleButton(): ReactElement {
	const [mode, setMode] = useAtom(appThemeAtom);

	const toggleMode = () => {
		setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
	};

	return (
		<IconButton onClick={toggleMode} sx={{width: 40, height: 40}}>
			<DynamicIcon mode={mode} />
		</IconButton>
	);
}

export default ModeToggleButton;
