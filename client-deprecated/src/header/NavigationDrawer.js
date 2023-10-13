import React, { useContext } from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import withStyles from "@mui/styles/withStyles";

import { routes } from "../configs/routes";
import { AppContext } from "./AppContext";

import { NavLink as Link } from "react-router-dom";

const styles = () => ({
  root: {
    width: "150"
  }
});

/**
 * Builds the navigation drawer with the various options
 * @param {*} param0 takes in style element classes
 * @returns
 */
function NavigationDrawer({ classes }) {
  const context = useContext(AppContext);
  return (
    <React.Fragment>
      <Drawer open={context.isDrawerOpen} onClose={context.toggleDrawer}>
        <List component="nav">
          {routes
            .filter((route) => route.name)
            .filter((route) => {
              return true;
            })
            .map((route, index) => (
              <Link to={route.path} key={index}>
                <ListItem button divider className={classes.root}>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </Link>
            ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default withStyles(styles)(NavigationDrawer);
