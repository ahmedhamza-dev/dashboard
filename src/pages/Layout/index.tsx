import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <>
        <Sidebar
          user={{ _id: "1", name: "Ahmed Hamza", occupation: "Engineer" }}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            user={{ _id: "1", name: "Ahmed Hamza", occupation: "Engineer" }}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Box p="0.2rem 1.5rem">
            <Outlet />
          </Box>
        </Box>
      </>
    </Box>
  );
};

export default Layout;
