import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import {LayoutProps} from './types';
import Footer from '../ui/ProviderFooter';

export default function ProviderLayout({children}: LayoutProps) {
	return (
		<>
			<Stack
				spacing={0}
				justifyContent='center'
				alignItems='center'
				minHeight={'90vh'}
			>
				<Paper
					elevation={2}
					sx={{padding: '170px 0px', minWidth: '90%', textAlign: 'center'}}
				>
					{children}
				</Paper>
			</Stack>
			<Footer />
		</>
	);
}
