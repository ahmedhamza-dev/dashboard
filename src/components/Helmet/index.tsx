import React from "react";
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import { useTheme } from "@mui/material";
import { Props } from "./props";

const Helmet: React.FC<Props> = ({ buttonProps, title }) => {
  const theme = useTheme();
  return (
    <FlexBetween width="100%" marginBottom="1rem" marginTop=".3rem">
      <h3
        style={{
          color: theme.palette.secondary.light,
          textTransform: "uppercase",
          fontSize: "1.4rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      {buttonProps && <Button {...buttonProps} />}
    </FlexBetween>
  );
};

export default Helmet;
