import Box from '@mui/material/Box';

import {LayoutProps} from './types';
import MesherySettingsEnvButton from '../ui/SettingsEnvButton';

export default function SettingsLayout({children}: LayoutProps) {
	return (
		<>
			<Box>
				<MesherySettingsEnvButton />
			</Box>
			{children}
		</>
	);
}
