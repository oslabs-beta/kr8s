import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import styles from "../assets/css/Sidebar.module.css";

const drawerWidth = 180;

export default function Sidebar(props) {
  function handleReroute(e) {
    e.preventDefault();
    // TODO: need to handle click to reroute to another page
  }

  let pages = props.pages.map((page) => {
    return (
      <div>
        <ListItem className={styles.pageNames}>
          <a href={props.routes} onClick={handleReroute}>
            {page}
          </a>
        </ListItem>
        <Divider />
      </div>
    );
  });

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "rgb(30,30,30)",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>{pages}</List>
        </Drawer>
      </Box>
    </div>
  );
}
