import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Badge,
  Button,
  InputBase,
  IconButton,
  Toolbar,
  makeStyles,
  Hidden
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import Img from "../../ui/img/img";
import { logoLandscape, logoPortrait } from "../../../utils/images";
import { showNotification } from "../../../utils/helpers";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.hint
  },
  logo: {
    maxWidth: 160,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 70
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    borderRadius: theme.shape.borderRadius
  },
  searchIcon: {
    width: theme.spacing(4),
    pointerEvents: "none"
  },
  inputRoot: {
    color: "inherit",
    borderBottom: `1px solid ${theme.palette.text.hint}`,
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 4),
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
        <Toolbar className="mx-auto lg:px-208">
          <div className={clsx("flex sm:w-1/5")}>
            <Button component={Link} to="/" className="sm:mx-5">
              <Hidden smUp>
                <Img src={logoPortrait} className={classes.logo} />
              </Hidden>
              <Hidden smDown>
                <Img src={logoLandscape} className={classes.logo} />
              </Hidden>
            </Button>
          </div>
          <div className="flex flex-1 justify-center">
            <div
              className={clsx(classes.search, "mx-16 lg:mx-24 w-full relative")}
            >
              <div
                className={clsx(
                  classes.searchIcon,
                  "flex items-center h-full absolute"
                )}
              >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Recipes…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={showNotification}
              />
            </div>
          </div>
          <div className="flex justify-end sm:w-1/5">
            <div className="sm:mx-5">
              <IconButton onClick={showNotification} color="inherit">
                <Badge badgeContent={3} color="primary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={showNotification} edge="end" color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Heading;
