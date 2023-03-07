import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AddIconCircleBorder from '../../assets/icons/AddIconCircleBorder';

export default function MesherySettingsEnvButton() {
	return (
		<Button
			type='submit'
			variant='contained'
			size='large'
			sx={{
				padding: '8px',
				borderRadius: 2,
				marginRight: '2rem',
			}}
			data-cy='btnResetDatabase'
			startIcon={
				<AddIconCircleBorder style={{width: '20px', height: '20px'}} />
			}
		>
			<Typography>Add Cluster</Typography>
		</Button>
	);
}
