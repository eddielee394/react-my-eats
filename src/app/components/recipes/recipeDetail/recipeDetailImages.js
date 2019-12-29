import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { chunk } from "lodash";
import {
  Badge,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  withStyles
} from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../../ui/img/img";

const useStyles = makeStyles(theme => ({
  imagesContainer: {},
  featuredImageContainer: {
    overflow: "hidden"
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
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryPage, setGalleryPage] = useState(1);
  const [galleryPageTotal, setGalleryPageTotal] = useState(1);
  const [galleryImagesPerPage] = useState(5);
  const { gallery } = images;

  const classes = useStyles();

  const chunkedImages = useMemo(() => chunk(gallery, galleryImagesPerPage), [
    gallery,
    galleryImagesPerPage
  ]);

  const galleryViewMoreCount =
    galleryPage === galleryPageTotal
      ? 0
      : gallery.length - galleryImages.length * galleryPage;

  useEffect(() => {
    setGalleryImages(chunkedImages[galleryPage - 1]);
    setGalleryPageTotal(chunkedImages.length);
  }, [galleryPage, chunkedImages]);

  const handleViewMoreClick = () => {
    const pageIncrement = galleryPage + 1;

    pageIncrement > galleryPageTotal
      ? setGalleryPage(1)
      : setGalleryPage(galleryPage + 1);
  };

  const _renderGalleryImages = (
    <GridList cellHeight={80} cols={3}>
      {galleryImages.map((image) => {
        return (
          <GridListTile key={image.id}>
            <Img src={image.path} />
          </GridListTile>
        );
      })}
      <GridListTile key={images.small}>
        <Img src={images.small} />
        <StyledGridListTileBar
          className="text-center"
          title={
            <IconButton onClick={handleViewMoreClick}>
              <Badge
                badgeContent={galleryViewMoreCount}
                color="primary"
                classes={{ badge: classes.gridImageViewMoreBadge }}
              >
                {galleryViewMoreCount > 0 ? (
                  <PhotoLibraryIcon fontSize="large" />
                ) : (
                  <ArrowBackIcon fontSize="large" />
                )}
              </Badge>
            </IconButton>
          }
        />
      </GridListTile>
    </GridList>
  );

  return (
    <div className={clsx(classes.imagesContainer, "images-container w-full")}>
      <div className={clsx(classes.featuredImageContainer, "w-full rounded")}>
        <Img src={images.medium} />
      </div>
      <div className={clsx(classes.gridImageContainer, "w-full mt-4")}>
        {_renderGalleryImages}
      </div>
    </div>
  );
}

RecipeDetailImages.propTypes = {
  images: PropTypes.object
};

export default RecipeDetailImages;
