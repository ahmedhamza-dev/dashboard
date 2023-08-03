import { useTheme } from "@mui/material";
import { Props } from "./props";
import { styled } from "styled-components";

const Button: React.FC<Props> = (props) => {
  const theme = useTheme();

  const StyledButton = styled.button<Props>((props) => ({
    backgroundColor: props.bg ? props.bg : theme.palette.secondary.dark,
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,  
    },
  }));
  return <StyledButton {...props}>{props.children || props.text}</StyledButton>;
};

export default Button;
