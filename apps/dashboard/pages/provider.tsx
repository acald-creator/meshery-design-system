import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import {styled} from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {Fragment, type SyntheticEvent, useRef, useState} from 'react';

import ProviderLayout from '@/components/layouts/ProviderLayout';

export const MesheryLogo = styled('img')(({theme}) => ({
	width: theme.spacing(50),
	maxWidth: '100%',
	height: 'auto',
}));

const options = [
	'Create a merge commit',
	'Squash and merge',
	'Rebase and merge',
];

export default function Provider() {
	const [open, setOpen] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(1);
	const anchorRef = useRef<HTMLDivElement | undefined>(null);

	const handleClick = () => {
		console.info("You clicked '{options[selectedIndex]}'");
	};

	const handleMenuItemClick = (event: SyntheticEvent, index: number) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (anchorRef.current?.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	const [openModal, setModalOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	return (
		<Fragment>
			<ProviderLayout>
				<MesheryLogo
					src='/img/meshery-logo/meshery-logo-light-text.png'
					alt='meshery logo'
				/>
				<Typography variant='h6' sx={{fontWeight: 700}} gutterBottom>
					Please choose a
					<Tooltip
						arrow
						title='Learn more about providers'
						placement='bottom'
						data-cy='providers-tooltip'
						sx={{
							color: '#00B39F',
							cursor: 'pointer',
							fontWeight: 700,
						}}
					>
						<Link
							onClick={handleClickOpen}
							underline='none'
							sx={{
								color: 'darkcyan',
								cursor: 'pointer',
								fontWeight: 700,
							}}
						>
							{' '}
							provider{' '}
						</Link>
					</Tooltip>
				</Typography>
				<Dialog
					onClose={handleModalClose}
					aria-labelledby='customized-dialog-title'
					open={openModal}
					sx={(theme) => ({
						'& .MuiDialogContent-root': {
							padding: theme.spacing(2),
						},
						'& .MuiDialogActions-root': {
							padding: theme.spacing(1),
						},
					})}
				>
					<DialogTitle id='customized-dialog-title' sx={{m: 0, p: 2}}>
						<Typography variant='h6' component='span'>
							Modal title
						</Typography>
						<IconButton
							aria-label='close'
							onClick={handleModalClose}
							sx={{top: 8, right: 8, position: 'absolute', color: 'grey.500'}}
						>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent dividers>
						<DialogContentText id='customized-dialog-content'>
							Login to Meshery by choosing from the available providers.
							Providers offer authentication, session management and long-term
							persistence of user preferences, performance tests, service mesh
							adapter configurations and so on.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleModalClose}
							color='primary'
							data-cy='providers-modal-button-ok'
							variant='contained'
						>
							OK
						</Button>
					</DialogActions>
				</Dialog>
				<Box
					sx={(theme) => ({
						width: '60%',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: theme.spacing(4),
					})}
				>
					<ButtonGroup
						variant='contained'
						color='primary'
						component={ButtonGroup}
						ref={anchorRef as React.RefObject<HTMLDivElement>}
						aria-label='split button'
					>
						<Button size='large' onClick={handleClick}>
							{options[selectedIndex]}
						</Button>
						<Button
							size='large'
							sx={{px: '0'}}
							aria-haspopup='menu'
							onClick={handleToggle}
							aria-label='select provider'
							aria-expanded={open ? 'true' : undefined}
							aria-controls={open ? 'split-button-menu' : undefined}
						>
							<ArrowDropDownIcon />
						</Button>
					</ButtonGroup>
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
					>
						{({TransitionProps, placement}) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === 'bottom' ? 'center top' : 'center bottom',
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList id='split-button-menu'>
											{options.map((option, index) => (
												<MenuItem
													key={option}
													disabled={index === 2}
													selected={index === selectedIndex}
													onClick={(event) => {
														handleMenuItemClick(event, index);
													}}
												>
													{option}
												</MenuItem>
											))}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</Box>
			</ProviderLayout>
		</Fragment>
	);
}
