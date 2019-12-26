import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Badge,
  Fade,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  withStyles
} from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Img from "react-image";

//Todo temp image gallery collection
const gallery = [
  {
    id: 1,
    title: "Test1",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 2,
    title: "Test2",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 3,
    title: "Test3",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 4,
    title: "Test4",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 5,
    title: "Test5",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 6,
    title: "Test6",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 7,
    title: "Test7",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  },
  {
    id: 8,
    title: "Test8",
    path: "http://localhost:3001/img/queso_brat_scramble--m.jpg"
  }
];

const useStyles = makeStyles(theme => ({
  imagesContainer: {},
  featuredImageContainer: {
    overflow: "hidden"
  },
  image: {
    objectFit: "cover",
    objectPosition: "center"
  },
  gridImageContainer: {},
  gridImageViewMoreBadge: {
    color: theme.palette.background.paper,
    border: `2px solid ${theme.palette.overlay.light[3]}`
  }
}));

const StyledGridListTileBar = withStyles(theme => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.overlay.light[3]
  },
  titleWrap: {
    color: theme.palette.text.primary,
    margin: 0
  }
}))(GridListTileBar);

function RecipeDetailImages({ images = {} }) {
  const classes = useStyles();
  const galleryCount = gallery.length;
  const chunkedGalleryImages = gallery.slice(0, 6);
  const galleryViewMoreCount = galleryCount - chunkedGalleryImages.length;

  const _renderGalleryImages = (
    <GridList cellHeight={80} cols={3}>
      {chunkedGalleryImages.map((image, index) => {
        return (
          <GridListTile key={image.id}>
            <Img
              src={image.path}
              className={clsx(classes.image, "w-full h-full")}
              container={children => {
                return (
                  <Fade in={true} timeout={500}>
                    {children}
                  </Fade>
                );
              }}
            />
            {index === chunkedGalleryImages.length - 1 && (
              <StyledGridListTileBar
                className="text-center"
                title={
                  <IconButton>
                    <Badge
                      badgeContent={galleryViewMoreCount}
                      color="primary"
                      classes={{ badge: classes.gridImageViewMoreBadge }}
                    >
                      <PhotoLibraryIcon fontSize="large" />
                    </Badge>
                  </IconButton>
                }
              />
            )}
          </GridListTile>
        );
      })}
    </GridList>
  );

  return (
    <div className={clsx(classes.imagesContainer, "images-container w-full")}>
      <div className={clsx(classes.featuredImageContainer, "w-full rounded")}>
        <Img
          src={images.medium}
          className={clsx(classes.image, "w-full h-full")}
          container={children => {
            return (
              <Fade in={true} timeout={500}>
                {children}
              </Fade>
            );
          }}
        />
      </div>
      <div className={clsx(classes.gridImageContainer, "flex w-full mt-4")}>
        {_renderGalleryImages}
      </div>
    </div>
  );
}

RecipeDetailImages.propTypes = {
  images: PropTypes.object.isRequired
};

export default RecipeDetailImages;
