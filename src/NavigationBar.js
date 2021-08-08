import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./styles/NavigationBar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="NavigationBar">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            className="NavigationBar-icon"
            src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
            alt=""
          />
          <Typography variant="h6" className={classes.title}>
            Keep
          </Typography>
          <Avatar className={classes.orange}>raja</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
