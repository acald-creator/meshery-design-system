import {Box} from '@mui/material';
import {DataGrid, type GridColDef, type GridRowsProp} from '@mui/x-data-grid';
// Import DataTable from 'mui-datatables';

import SettingsLayout from '../layouts/SettingsEnvLayout';

const rows: GridRowsProp = [
	{id: 1, col1: 'Hello', col2: 'World'},
	{id: 2, col1: 'DataGridPro', col2: 'is Awesome'},
	{id: 3, col1: 'MUI', col2: 'is Amazing'},
];

const columns: GridColDef[] = [
	{field: 'col1', headerName: 'Column 1', width: 150},
	{field: 'col2', headerName: 'Column 2', width: 150},
];

export default function MeshConfig() {
	return (
		<SettingsLayout>
			<Box
				component={'div'}
				sx={{display: 'table', tableLayout: 'fixed', width: '100%'}}
			>
				{/* <DataTable /> */}
				<DataGrid rows={rows} columns={columns} />
			</Box>
		</SettingsLayout>
	);
}
