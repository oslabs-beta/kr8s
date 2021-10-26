import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import styles from "../assets/css/Sidebar.module.css";

const drawerWidth = 180;

export default function Sidebar(props) {
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
          <Divider className={styles.divider} variant="middle" />
          
          <List>
            
            <ListItem className={styles.pageNames}>
              <Link to="/dash">Cluster Dashboard</Link>
            </ListItem>
            
            <Divider className={styles.divider} variant="middle" />
            
            <ListItem className={styles.pageNames}>
              <Link to="/nodes">Nodes</Link>
            </ListItem>
            
            <Divider className={styles.divider} variant="middle" />
            
            <ListItem className={styles.pageNames}>
              <Link to="/pods">Pods</Link>
            </ListItem>
            
            <Divider className={styles.divider} variant="middle" />
          
          </List>
        </Drawer>
      </Box>
    </div>
  );
}
