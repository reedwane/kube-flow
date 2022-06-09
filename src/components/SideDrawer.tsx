import { Drawer, Typography, useMediaQuery } from "@mui/material";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

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

  return (
    <>
      {matches ? (
        <Drawer
          sx={{
            width: 240,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          color="primary"
          variant="permanent"
          open
          anchor="left"
        >
          <Typography variant="h5" color="initial">
            <AiFillHome />
            Home
          </Typography>
          <Typography variant="h5" color="initial">
            GitHub <BiLinkExternal />
          </Typography>
          <Typography variant="h5" color="initial">
            Documentation <BiLinkExternal />
          </Typography>
        </Drawer>
      ) : (
        <Drawer
          sx={{
            width: 240,
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleOpenDrawer}
        >
          <Typography variant="h5" color="initial">
            <AiFillHome />
            Home
          </Typography>
          <Typography variant="h5" color="initial">
            GitHub <BiLinkExternal />
          </Typography>
          <Typography variant="h5" color="initial">
            Documentation <BiLinkExternal />
          </Typography>
        </Drawer>
      )}
    </>
  );
};

export default SideDrawer;
