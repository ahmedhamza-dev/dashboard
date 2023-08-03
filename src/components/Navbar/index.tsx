import React, { FC, useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import { setMode } from "../../redux/slices/mode.slice";
import { NavbarProps } from "./props";

const Navbar: FC<NavbarProps> = ({
  user = { name: "Ahmed" },
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            sx={{
              backgroundColor: `${
                theme.palette["mode"] === "dark"
                  ? theme.palette.primary.dark
                  : "#f4f4f4"
              }`,
            }}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{
                    color: `${
                      theme.palette["mode"] === "dark"
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.contrastText
                    }`,
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{
                    color: `${
                      theme.palette["mode"] === "dark"
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.contrastText
                    }`,
                  }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: `${
                    theme.palette["mode"] === "dark"
                      ? theme.palette.secondary.dark
                      : theme.palette.secondary.contrastText
                  }`,
                  // color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
