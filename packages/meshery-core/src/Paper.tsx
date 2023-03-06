import {
	Paper as MuiPaper,
	PaperClasses,
	PaperPropsVariantOverrides,
	SxProps,
	Theme,
} from '@mui/material';
import {OverridableStringUnion} from '@mui/types';
import * as React from 'react';

export type PaperProps = {
	children?: React.ReactNode;
	classes?: Partial<PaperClasses>;
	elevation?: number;
	square?: boolean;
	sx: SxProps<Theme>;
	variant?: OverridableStringUnion<
		'elevation' | 'outlined',
		PaperPropsVariantOverrides
	>;
};

export function Paper(props: PaperProps) {
	return <MuiPaper {...props}>{props.children}</MuiPaper>;
}

Paper.displayName = 'Paper';
