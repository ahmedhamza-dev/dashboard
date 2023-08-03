import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Props } from "./props";
import { Box } from "@mui/material";

const DataTable: React.FC<Props> = (props) => {
  return (
    <Box width="100%">
      <DataGrid {...props} sx={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }} />
    </Box>
  );
};

export default DataTable;
