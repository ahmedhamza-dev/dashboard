import { useTheme } from "@mui/material";
import { Props } from "./props";
import { styled } from "styled-components";

const StyledButton = styled.button<Props>((props) => ({
  backgroundColor: props.bg ? props.bg : props.theme.palette.secondary.dark,
  border: "none",
  padding: "6px 15px",
  borderRadius: "6px",
  color: "white",
  fontSize: "1rem",
  fontWeight: "600",
  transition: "all 0.2s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: props.theme.palette.secondary.main,  
  },
}));
const Button: React.FC<Props> = (props) => {
  const theme = useTheme();
  return <StyledButton theme={theme} {...props}>{props.children || props.text}</StyledButton>;
};

export default Button;
