import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "assets/logo.svg";
import { Box, Typography, Tooltip } from "@mui/material";
import { ArrowDropDown, LogoutOutlined } from "@mui/icons-material";
import { GiCardboardBoxClosed } from "react-icons/gi";

interface IAppbarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Appbar: React.FunctionComponent<IAppbarProps> = ({ open, setOpen }) => {
  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: { lg: `calc(100% - ${240}px)` },
          ml: { lg: `${240}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="primary"
            onClick={handleOpenDrawer}
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
              display: { lg: "none" },
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
              display: { lg: "none" },
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
                <GiCardboardBoxClosed />
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
                <ArrowDropDown />
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
