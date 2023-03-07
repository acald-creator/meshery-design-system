import FavoriteIcon from '@mui/icons-material/Favorite';
import NoSsr from '@mui/material/NoSsr';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, {Fragment} from 'react';

export default function Footer() {
	const handleL5CommunityClick = () => {
		if (typeof window !== 'undefined') {
			const w = window.open('https://layer5.io', '_blank');
			w?.focus();
		}
	};

	return (
		<Fragment>
			<NoSsr>
				<Stack>
					<Paper
						square
						component='footer'
						variant='outlined'
						sx={(theme) => ({
							color: theme.palette.primary.contrastText,
							backgroundColor:
								theme.palette.mode === 'dark'
									? theme.palette.background.default
									: theme.palette.background.paper,
							padding: theme.spacing(2),
							border: '0',
						})}
					>
						<Typography
							variant='body2'
							align='center'
							component='p'
							sx={(theme) => ({
								color: theme.palette.text.secondary,
							})}
						>
							<span
								onClick={handleL5CommunityClick}
								style={{
									cursor: 'pointer',
									display: 'inline',
									verticalAlign: 'middle',
								}}
							>
								Built with{' '}
								<FavoriteIcon
									sx={{
										display: 'inline',
										verticalAlign: 'top',
									}}
								/>{' '}
								by the Layer5 Community
							</span>
						</Typography>
					</Paper>
				</Stack>
			</NoSsr>
		</Fragment>
	);
}
