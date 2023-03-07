import Stack from '@mui/material/Stack';

import ReactSelectWrapper from './ReactSelectWrapper';

export default function MeshAdapterConfig() {
	return (
		<Stack spacing={1} alignItems='flex-end'>
			<Stack>
				<ReactSelectWrapper />
			</Stack>
		</Stack>
	);
}
