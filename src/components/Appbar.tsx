import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "assets/logo.svg";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import { LogoutOutlined, StorageRounded } from "@mui/icons-material";

interface IAppbarProps {}

const Appbar: React.FunctionComponent<IAppbarProps> = (props) => {
  return (
    <>
      <AppBar position="fixed" color="inherit" sx={{ display: "flex" }}>
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="primary"
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            sx={{
              mr: 2,
              height: 24,
              width: 100,
              maxHeight: { xs: 40, md: 40 },
              maxWidth: { xs: 130, md: 130 },
            }}
            alt="logo"
            src={logo}
          />

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "left",
            }}
          >
            <Tooltip
              title="No Namespaces"
              sx={{
                ":hover": {
                  background: "none",
                },
              }}
            >
              <IconButton aria-label="namespaces">
                <StorageRounded />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    ml: 1,
                  }}
                >
                  No Namespaces
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>

          <IconButton aria-label="logout">
            <LogoutOutlined color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
