import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Paper,
  Fab,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import RecipeList from "../recipes/recipeList/recipeList";
import CreateIcon from "@material-ui/icons/Create";
import Sidebar from "../ui/layout/sidebar";
import { formatThousandsToK, showNotification } from "../../utils/helpers";

const user = {
  id: 1,
  firstName: "Sam",
  lastName: "DaMan",
  avatarUrl: "https://i.pravatar.cc/100?img=18",
  stats: {
    followers: 500,
    following: 248,
    likesCount: 2300,
    recipes: 20,
    savedRecipes: 75
  }
};

const useStyles = makeStyles({
  addButton: {
    position: "fixed",
    right: 50,
    bottom: 12,
    zIndex: 99
  }
});

function Feed(props) {
  const classes = useStyles();

  return (
    <div className="sm:flex w-full lg:px-208 my-4">
      <Sidebar colSize="1/5">
        <List>
          <ListItem disableGutters={true} className="justify-center">
            <ListItemAvatar>
              <Avatar
                alt={`${user.firstName} ${user.lastName}`}
                src={user.avatarUrl}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <div>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    color="textPrimary"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>
                  <div className="flex">
                    <Typography variant="caption" component="span">
                      {user.stats.followers} followers
                    </Typography>
                    <Typography
                      className="mx-1"
                      variant="caption"
                      component="span"
                    >
                      &bull;
                    </Typography>
                    <Typography variant="caption" component="span">
                      {formatThousandsToK(user.stats.likesCount)} likes
                    </Typography>
                  </div>
                </div>
              }
            />
          </ListItem>
          <Divider />
          <ListItem className="justify-between" disableGutters={true}>
            <div className="flex flex-col items-center">
              <Typography variant="subtitle2">{user.stats.recipes}</Typography>
              <Typography variant="caption">Recipes</Typography>
            </div>
            <div className="flex flex-col items-center">
              <Typography variant="subtitle2">
                {user.stats.savedRecipes}
              </Typography>
              <Typography variant="caption">Saved</Typography>
            </div>
            <div className="flex flex-col items-center">
              <Typography variant="subtitle2">
                {user.stats.following}
              </Typography>
              <Typography variant="caption">Following</Typography>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography variant="subtitle2">
              UserFavoritesList component
            </Typography>
          </ListItem>
        </List>
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
            <div className="flex flex-col">
              <Typography variant="subtitle2">Most Active Today</Typography>
              <AvatarGroup>
                <Avatar
                  acomponent="button"
                  onClick={showNotification}
                  src="https://i.pravatar.cc/100?img=1"
                />
                <Avatar
                  component="button"
                  onClick={showNotification}
                  src="https://i.pravatar.cc/100?img=5"
                />
                <Avatar
                  component="button"
                  onClick={showNotification}
                  src="https://i.pravatar.cc/100?img=3"
                />
                <Avatar component="button" onClick={showNotification}>
                  +3
                </Avatar>
              </AvatarGroup>
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <div className="flex flex-col">
              <Typography variant="subtitle2">NavMenu component</Typography>
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
