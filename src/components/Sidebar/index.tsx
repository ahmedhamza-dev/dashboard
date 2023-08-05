import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
} from "@mui/icons-material";

import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import { SidebarProps } from "./props";
import { useAppSelector } from "../../redux/store";
import { navItems } from "../../config/data";

const Sidebar: FC<SidebarProps> = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.substring(1) || "");
  const navigate = useNavigate();
  const theme = useTheme();
  const { mode } = useAppSelector((state) => state.mode);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.dark,
              backgroundColor: theme.palette.background.default,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    DASHBOARD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, path }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "1.25rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = path.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/dashboard/${lcText}`);
                        setActive(`dashboard/${lcText}`);
                      }}
                      sx={{
                        backgroundColor:
                          active === `dashboard/${lcText}`
                            ? theme.palette.secondary.light
                            : "transparent",
                        color:
                          active === `dashboard/${lcText}`
                            ? mode === "dark"
                              ? theme.palette.primary.dark
                              : theme.palette.primary.light
                            : theme.palette.secondary.light,

                        ":hover": {
                          backgroundColor:
                            active === `dashboard/${lcText}`
                              ? theme.palette.secondary.light
                              : "transparent",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "1.5rem",
                          color:
                            active === `dashboard/${lcText}`
                              ? mode === "dark"
                                ? theme.palette.primary.dark
                                : theme.palette.primary.light
                              : theme.palette.secondary.light,
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === `dashboard/${lcText}` && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box>
            <Divider />
            <FlexBetween textTransform="none" gap="1.5rem" m="1.5rem">
              <Box
                component="img"
                alt="profile"
                src={
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary.dark,
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
