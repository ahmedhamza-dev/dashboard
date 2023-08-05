import { Props } from "./props";
import { TextField } from "@mui/material";

const Input: React.FC<Props> = (props) => {
  return (
      <TextField {...props} />
  )
}
Input.defaultProps = {
    variant: "outlined",
    type: "text",
    fullWidth: true,
}
export default Input;