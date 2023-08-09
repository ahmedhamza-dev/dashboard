import { Theme } from "@mui/material";

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
    bg?: string,
    variant?: "link" | "outline" | "primary" | "secondary",
    text?: string,
    theme?: Theme
}
