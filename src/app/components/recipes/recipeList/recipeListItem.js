import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  makeStyles,
  Tooltip,
  Typography
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import Img from "../../ui/img/img";
import { formatTimeFromNow, showNotification } from "../../../utils/helpers";

const useStyles = makeStyles(theme => ({
  favoriteButton: {},
  specialsIcon: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.secondary,
    border: `2px solid ${theme.palette.background.paper}`
  },
  recipeTimeIcon: {
    color: theme.palette.secondary.contrastText,
    marginLeft: "auto"
  }
}));

function RecipeListItem(props) {
  const [favorited, setFavorited] = useState(false);
  const { recipe } = props;
  const classes = useStyles();

  const handleToggleFavorite = () => {
    setFavorited(!favorited);
  };

  const recipeTime = recipe.prepTime + recipe.cookTime;
  const hasSpecials = recipe.specialsCount > 0;

  return (
    <div className="w-full my-5">
      <Card className="py-5">
        <CardHeader
          avatar={<Avatar>ME</Avatar>}
          title={<Typography variant="h6">recipe.author</Typography>}
          subheader={
            <Typography variant="subtitle1">
              {formatTimeFromNow(recipe.postDate)}
            </Typography>
          }
          action={
            <IconButton onClick={handleToggleFavorite}>
              {favorited ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          }
        />
        <CardMedia className="flex h-320">
          <Img src={recipe.images.medium} />
        </CardMedia>
        <Link to={`/recipes/${recipe.uuid}`}>
          <CardContent>
            <div className="flex justify-between">
              <Typography variant="h4">{recipe.title}</Typography>
              {hasSpecials && (
                <Tooltip
                  title={
                    <Typography variant="caption">
                      {recipe.specialsCount} Special Promotions Available!
                    </Typography>
                  }
                  arrow
                >
                  <Badge
                    badgeContent={recipe.specialsCount}
                    overlap="circle"
                    classes={{ badge: classes.specialsIcon }}
                  >
                    <LoyaltyOutlinedIcon fontSize="large" color="primary" />
                  </Badge>
                </Tooltip>
              )}
            </div>
            <Typography variant="body1" component="p" gutterBottom>
              {recipe.description}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <Button onClick={showNotification} size="small">
            {recipe.specialsCount} Likes
          </Button>
          <Button onClick={showNotification} size="small">
            {recipe.specialsCount} Comments
          </Button>
          <Chip
            icon={<AccessTimeIcon />}
            label={`${recipeTime} mins`}
            color="primary"
            className={classes.recipeTimeIcon}
          />
        </CardActions>
      </Card>
    </div>
  );
}

RecipeListItem.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeListItem;
