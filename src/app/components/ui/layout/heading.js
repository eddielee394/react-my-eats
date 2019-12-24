import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  Badge,
  Button,
  InputBase,
  IconButton,
  Toolbar,
  makeStyles,
  Fade
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import Img from "react-image";
import { logoLandscape } from "../../../utils/images";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.hint
  },
  logo: {
    maxWidth: 160
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    borderRadius: theme.shape.borderRadius
  },
  searchIcon: {
    width: theme.spacing(7),
    pointerEvents: "none"
  },
  inputRoot: {
    color: "inherit",
    borderBottom: `1px solid ${theme.palette.text.hint}`,
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

function Heading(props) {
  const classes = useStyles(props);

  return (
    <AppBar
      position="static"
      className={clsx(classes.appBar, "flex relative z-10")}
      color="default"
    >
      <div className="flex-row">
        <Toolbar className="mx-auto max-w-lg  lg:max-w-2xl">
          <div className={clsx("flex flex-shrink-0 items-center")}>
            <Button>
              <Img
                src={logoLandscape}
                className={classes.logo}
                container={children => {
                  return (
                    <Fade in={true} timeout={500}>
                      {children}
                    </Fade>
                  );
                }}
              />
            </Button>
          </div>
          <div className="flex flex-1 justify-center">
            <div
              className={clsx(classes.search, "mx-16 lg:mx-24 w-2/3 relative")}
            >
              <div
                className={clsx(
                  classes.searchIcon,
                  "flex items-center justify-center h-full absolute"
                )}
              >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Recipe…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div className="flex">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

Heading.propTypes = {};

export default Heading;
