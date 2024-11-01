import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryMobileDrawer({ open, toggleDrawer }) {
  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {[
          "Home",
          "About us",
          "Enquire now",
          "Services",
          "Gallery",
          "Contact us",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{ textAlign: "center" }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#121212",
          color: "#fff",
          borderRight: "4px solid #FFD70D",
        },
      }}
      anchor="right"
    >
      {DrawerList}
    </Drawer>
  );
}
