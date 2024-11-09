import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryMobileDrawer({ open, toggleDrawer }) {
  const pageLinkArr = [
    "#home",
    "#about-us",
    "#enquire",
    "#services",
    "#gallery",
    "#contact-us",
  ];
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
          overflow: "hidden",
          padding: "0 2rem",
          margin: "0",
        }}
      >
        {[
          "Home",
          "About us",
          "Enquire now",
          "Services",
          "Gallery",
          "Contact us",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              margin: "0",
              borderBottom: "4px solid #FFD70D",
              padding: "1rem",
            }}
            aria-label={text}
          >
            <ListItemButton
              href={pageLinkArr[index]}
              style={{ textAlign: "center" }}
              onClick={toggleDrawer(false)}
              aria-label={text}
            >
              <ListItemText primary={text} aria-label={text} />
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
          borderLeft: "4px solid #FFD70D",
        },
      }}
      anchor="right"
    >
      {DrawerList}
    </Drawer>
  );
}
