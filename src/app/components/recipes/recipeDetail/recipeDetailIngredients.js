import React, { useState } from "react";
import PropTypes from "prop-types";
import { capitalize, some } from "lodash";
import clsx from "clsx";
import {
  Avatar,
  Badge,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  makeStyles,
  Typography,
  Zoom
} from "@material-ui/core";
import LoyaltyRoundedIcon from "@material-ui/icons/LoyaltyRounded";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"; //promocode
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; //local
import PlaceIcon from "@material-ui/icons/Place"; //event
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"; //sale
import Img from "../../ui/img/img";
import { showNotification } from "../../../utils/helpers";

const useStyles = makeStyles(theme => ({
  specialsIconBadge: {
    width: 23,
    height: 23,
    right: -3,
    padding: "12px",
    top: 35,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.background.paper}`
  },
  ingredientListSpecial: {
    boxShadow: "0px -5px 5px -5px rgba(137,246,207,0.50)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderTop: `1px solid ${theme.palette.background.paper}`,
    borderLeft: `4px solid ${theme.palette.primary.light}`,
    borderRight: `2px solid ${theme.palette.primary.light}`
  },
  ingredientListSpecialContainer: {
    boxShadow: "inset 0px -5px 7px -5px rgba(137,246,207,0.50)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 5,
    borderLeft: `4px solid ${theme.palette.primary.light}`,
    borderRight: `2px solid ${theme.palette.primary.light}`
  }
}));

const IngredientSpecialIcon = ({ type, color, fontSize }) => {
  const specialIcon = {
    event: <PlaceIcon color={color} fontSize={fontSize} />,
    local: <ShoppingBasketIcon color={color} fontSize={fontSize} />,
    promocode: <CardGiftcardIcon color={color} fontSize={fontSize} />,
    sale: <MonetizationOnIcon color={color} fontSize={fontSize} />
  };

  return specialIcon[type];
};

function RecipeDetailIngredients({ ingredients, specials }) {
  const [activeSpecial, setActiveSpecial] = useState(false);
  const classes = useStyles();

  const findIngredientSpecial = ingredientId =>
    specials.find(_special => _special.ingredientId === ingredientId);

  const hasIngredientSpecial = ingredientId =>
    some(specials, ["ingredientId", ingredientId]);

  const handleListExpand = ingredientId => {
    activeSpecial === ingredientId
      ? setActiveSpecial(false)
      : setActiveSpecial(ingredientId);
  };

  const _renderIngredientListItem = ingredient => {
    const special = findIngredientSpecial(ingredient.uuid);

    return (
      <React.Fragment>
        <ListItem
          className={clsx({
            [classes.ingredientListSpecial]: hasIngredientSpecial(
              ingredient.uuid
            )
          })}
          button={hasIngredientSpecial(ingredient.uuid)}
          onClick={() =>
            hasIngredientSpecial(ingredient.uuid) &&
            handleListExpand(ingredient.uuid)
          }
        >
          <ListItemAvatar>
            <Badge
              badgeContent={<LoyaltyRoundedIcon color="primary" />}
              overlap="circle"
              classes={{ badge: classes.specialsIconBadge }}
              invisible={!hasIngredientSpecial(ingredient.uuid)}
            >
              <Avatar>
                <Img src={ingredient.image} />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <Typography variant="subtitle2">{ingredient.name}</Typography>
          {hasIngredientSpecial(ingredient.uuid) && (
            <div className="flex flex-col items-center ml-auto">
              <IngredientSpecialIcon
                type={special.type}
                color="primary"
                fontSize="small"
              />
              <Typography variant="caption">
                {capitalize(special.type)} Special
              </Typography>
            </div>
          )}
        </ListItem>
        {hasIngredientSpecial(ingredient.uuid) && (
          <Collapse
            in={activeSpecial === ingredient.uuid}
            timeout="auto"
            unmountOnExit
          >
            <div
              className={clsx(
                classes.ingredientListSpecialContainer,
                "flex p-5 w-full"
              )}
            >
              <div className="flex flex-col w-3/5">
                <Typography className="my-2" variant="body1">
                  {special.title}
                </Typography>
                <Divider className="w-1/2" />
                <Typography className="my-2" variant="body2">
                  {special.text}
                </Typography>
              </div>
              <div className="flex flex-col w-2/5 justify-center items-center">
                <Zoom
                  in={activeSpecial === ingredient.uuid}
                  timeout={300}
                  style={{
                    transitionDelay: `${
                      activeSpecial === ingredient.uuid ? 500 : 0
                    }ms`
                  }}
                  unmountOnExit
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={showNotification}
                  >
                    Learn More!
                  </Button>
                </Zoom>
              </div>
            </div>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="w-full my-8 mb-10">
      <Typography variant="h6">Ingredients</Typography>
      <List className="flex flex-wrap">
        {ingredients.map(ingredient => (
          <div className="w-full md:w-1/2" key={ingredient.uuid}>
            {_renderIngredientListItem(ingredient)}
          </div>
        ))}
      </List>
    </div>
  );
}

RecipeDetailIngredients.propTypes = {
  ingredients: PropTypes.array,
  specials: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeDetailIngredients;
