import * as React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <MuiButton variant="contained">{props.children}</MuiButton>;
}

Button.displayName = "Button";
