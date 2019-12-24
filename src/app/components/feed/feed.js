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
import StickyBox from "react-sticky-box";
import RecipeList from "../recipes/recipeList/recipeList";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  addButton: {
    position: "fixed",
    right: 50,
    bottom: 12,
    zIndex: 99
  }
});

const widgetSpacing = "my-5 p-5";
const colSpacing = "my-5 p-5";

function LeftSideBar(props) {
  return (
    <React.Fragment>
      <Paper className={widgetSpacing}>
        <List>
          <ListItem>
            <Typography>UserProfileInfo component</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography>UserProfileStats component</Typography>
          </ListItem>
        </List>
      </Paper>
      <Paper className={widgetSpacing}>
        <Typography>UserFavoritesList component</Typography>
      </Paper>
    </React.Fragment>
  );
}

function RightSideBar(props) {
  return (
    <React.Fragment>
      <Paper className={widgetSpacing}>
        <Typography>FeaturedPosts component</Typography>
      </Paper>
      <Paper className={widgetSpacing}>
        <Typography>ActiveUsers component</Typography>
      </Paper>
      <Paper className={widgetSpacing}>
        <Typography>NavMenu component</Typography>
      </Paper>
    </React.Fragment>
  );
}

function Feed(props) {
  const classes = useStyles();

  return (
    <div className="sm:flex w-full lg:px-208 my-4">
      <div className={clsx(colSpacing, "w-full sm:w-1/5")}>
        <StickyBox offsetTop={10} offsetBottom={20}>
          <LeftSideBar />
        </StickyBox>
      </div>
      <div className={clsx(colSpacing, "w-full sm:w-3/5")}>
        <Paper
          className={clsx(
            widgetSpacing,
            "flex flex-col justify-center items-center h-full"
          )}
        >
          <RecipeList />
        </Paper>
      </div>
      <div className={clsx(colSpacing, "w-full sm:w-1/5")}>
        <StickyBox offsetTop={10} offsetBottom={20}>
          <RightSideBar />
        </StickyBox>
      </div>
      <Fab color="primary" className={classes.addButton}>
        <CreateIcon />
      </Fab>
    </div>
  );
}

export default Feed;
