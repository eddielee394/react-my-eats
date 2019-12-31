import React from "react";
import clsx from "clsx";
import {
  Divider,
  Fab,
  Hidden,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import { showNotification } from "../../utils/helpers";
import { demoData } from "../../../data/data";
import RecipeList from "../recipes/recipeList/recipeList";
import CreateIcon from "@material-ui/icons/Create";
import Sidebar from "../ui/layout/sidebar";
import ActiveUsersWidget from "../widgets/activeUsersWidget";
import UserStatsWidget from "../widgets/userStatsWidget";
import UserInfoWidget from "../widgets/userInfoWidget";
import SocialLinks from "../widgets/socialLinks";

const useStyles = makeStyles(theme => ({
  addButton: {
    position: "fixed",
    right: 50,
    bottom: 12,
    zIndex: 99
  }
}));

function Feed(props) {
  const classes = useStyles();
  const { user } = demoData;
  const { users } = demoData;

  return (
    <div className="flex flex-col sm:flex-row w-full lg:px-208 my-4">
      <Sidebar colSize="1/5">
        <List>
          <ListItem disableGutters={true}>
            <UserInfoWidget user={user} />
          </ListItem>
          <Divider />
          <ListItem disableGutters={true}>
            <UserStatsWidget user={user} />
          </ListItem>
        </List>
        <Hidden smDown>
          <List>
            <ListItem>
              <Typography variant="subtitle2">
                UserFavoritesList component
              </Typography>
            </ListItem>
          </List>
        </Hidden>
      </Sidebar>
      <div className={clsx("w-full sm:w-3/5 my-5 p-5")}>
        <Paper
          className={clsx(
            "flex flex-col justify-center items-center h-full my-5 p-5"
          )}
        >
          <RecipeList />
        </Paper>
      </div>
      <Sidebar>
        <List>
          <ListItem>
            <Typography variant="subtitle2">FeaturedPosts component</Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ActiveUsersWidget users={users} />
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem>
            <div className="w-full">
              <div className="flex flex-1 justify-between">
                <Typography
                  variant="caption"
                  color="inherit"
                  component="button"
                  onClick={showNotification}
                >
                  About
                </Typography>
                <Typography
                  variant="caption"
                  color="inherit"
                  component="button"
                  onClick={showNotification}
                >
                  Help
                </Typography>
                <Typography
                  variant="caption"
                  color="inherit"
                  component="button"
                  onClick={showNotification}
                >
                  Privacy
                </Typography>
              </div>
              <SocialLinks
                className="flex justify-between sm:justify-center"
                iconProps={{ fontSize: "small" }}
              />
              <Divider />
              <Typography className="mt-5 text-center" variant="caption">
                &copy; MyEats 2020
              </Typography>
            </div>
          </ListItem>
        </List>
      </Sidebar>
      <Fab
        color="primary"
        className={classes.addButton}
        onClick={showNotification}
      >
        <CreateIcon />
      </Fab>
    </div>
  );
}

export default Feed;
