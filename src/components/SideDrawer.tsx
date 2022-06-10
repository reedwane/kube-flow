import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Link,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import logo from "assets/logo-light.svg";
import styled from "@emotion/styled";

interface ISideDrawerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SideDrawer: React.FunctionComponent<ISideDrawerProps> = ({
  open,
  setOpen,
}) => {
  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const matches = useMediaQuery("(min-width: 1200px)");
  const elevationMatch = useMediaQuery("(max-width: 900px)");
  if (matches) setOpen(true);

  const variant = matches ? "permanent" : "temporary";

  const elevation = elevationMatch ? 0 : 1;

  const faintText = "rgba(255, 255, 255, 0.5)";

  const Footer = styled(Box)`
    position: fixed;
    margin: 0 1.2em;
    bottom: 20px;
    text-align: center;
    padding-bottom: 10px;
  `;

  return (
    <>
      <CssBaseline />
      <Drawer
        sx={{
          backgroundColor: "#0a3b71",
          width: {
            xs: "auto",
            md: 240,
            boxShadow: { xs: "none" },
            "& .MuiDrawer-paper": {
              boxShadow: { md: "none" },
            },
          },
        }}
        color="secondary"
        elevation={elevation}
        variant={variant}
        open={open}
        anchor="left"
        onClose={handleOpenDrawer}
      >
        <Paper
          // color="inherit"
          square
          sx={{
            width: 240,
            height: "100%",
            margin: 0,
            backgroundColor: { xs: "#051D38", md: "#0a3b71" },
            elevation: { xs: 0 },
          }}
        >
          <Box
            component="img"
            sx={{
              m: 2,
              mr: 4,
              width: "80%",
              maxWidth: 130,
              maxHeight: 32,
            }}
            alt="logo"
            src={logo}
          />

          <Typography
            variant="h6"
            color="common.white"
            sx={{
              height: 48,
              fontSize: "1rem",
              borderLeft: "3px solid white",
              display: "flex",
              alignItems: "center",
              gap: 3,
              pl: 2,
              mb: 2,
            }}
          >
            <AiFillHome />
            Home
          </Typography>

          <Divider
            sx={{
              backgroundColor: faintText,
              m: "1em 0.7em 2em",
            }}
          />

          <Typography
            variant="h6"
            color={faintText}
            sx={{
              height: 48,
              fontSize: "1rem",
              pl: 2,
            }}
          >
            <Link
              href="https://github.com/kubeflow/kubeflow"
              underline="none"
              color={faintText}
            >
              GitHub <BiLinkExternal />
            </Link>
          </Typography>

          <Typography
            variant="h6"
            color={faintText}
            sx={{
              height: 48,
              fontSize: "1rem",
              pl: 2,
            }}
          >
            <Link
              href="https://www.kubeflow.org/docs/about/kubeflow/"
              underline="none"
              color={faintText}
            >
              Documentation <BiLinkExternal />
            </Link>
          </Typography>

          <Footer sx={{ fontSize: 14 }}>
            <Link href="https://policies.google.com/privacy" color={faintText}>
              Privacy{" "}
            </Link>
            .
            <Link
              href="https://www.kubeflow.org/docs/other-guides/usage-reporting/"
              color={faintText}
            >
              {" "}
              Usage Reporting
            </Link>
            <Typography variant="body1" fontStyle={"italic"} color={faintText}>
              build version dev_local
            </Typography>
          </Footer>
        </Paper>
      </Drawer>
    </>
  );
};

export default SideDrawer;
