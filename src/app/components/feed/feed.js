import React from "react";
import clsx from "clsx";
import {
  Paper,
  Fab,
  Divider,
  Typography,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import RecipeList from "../recipes/recipeList/recipeList";
import CreateIcon from "@material-ui/icons/Create";
import Sidebar from "../ui/layout/sidebar";

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
      <Sidebar>
        <List>
          <ListItem>
            <Typography>UserProfileInfo component</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography>UserProfileStats component</Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography>UserFavoritesList component</Typography>
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
            <Typography>FeaturedPosts component</Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography>ActiveUsers component</Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography>NavMenu component</Typography>
          </ListItem>
        </List>
      </Sidebar>
      <Fab color="primary" className={classes.addButton}>
        <CreateIcon />
      </Fab>
    </div>
  );
}

export default Feed;
