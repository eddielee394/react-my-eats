import React from "react";
import PropTypes from "prop-types";
import { keys } from "lodash";
import ContentLoader, {
  Instagram,
  Facebook,
  Code,
  List,
  BulletList
} from "react-content-loader";

const GridFeatured = props => {
  return (
    <ContentLoader
      height={330}
      width={250}
      speed={2}
      primaryColor="#dfdcdc"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="250" height="170" />
      <rect x="0" y="175" rx="0" ry="0" width="80" height="70" />
      <rect x="0" y="250" rx="0" ry="0" width="80" height="70" />
      <rect x="85" y="175" rx="0" ry="0" width="80" height="70" />
      <rect x="85" y="250" rx="0" ry="0" width="80" height="70" />
      <rect x="170" y="175" rx="0" ry="0" width="80" height="70" />
      <rect x="170" y="250" rx="0" ry="0" width="80" height="70" />
      <rect x="260" y="175" rx="0" ry="0" width="80" height="70" />
      <rect x="260" y="250" rx="0" ry="0" width="80" height="70" />
    </ContentLoader>
  );
};

const Grid = props => {
  return (
    <ContentLoader
      height={175}
      width={250}
      speed={2}
      primaryColor="#dfdcdc"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="5" rx="0" ry="0" width="80" height="70" />
      <rect x="0" y="80" rx="0" ry="0" width="80" height="70" />
      <rect x="85" y="5" rx="0" ry="0" width="80" height="70" />
      <rect x="85" y="80" rx="0" ry="0" width="80" height="70" />
      <rect x="170" y="5" rx="0" ry="0" width="80" height="70" />
      <rect x="170" y="80" rx="0" ry="0" width="80" height="70" />
      <rect x="260" y="5" rx="0" ry="0" width="80" height="70" />
      <rect x="260" y="80" rx="0" ry="0" width="80" height="70" />
    </ContentLoader>
  );
};

const Rectangle = props => {
  return (
    <ContentLoader
      height={475}
      width={600}
      speed={2}
      primaryColor="#dfdcdc"
      secondaryColor="#ecebeb"
    >
      <rect x="-2" y="35" rx="5" ry="5" width="550" height="400" />
    </ContentLoader>
  );
};

const BlogList = props => {
  return (
    <ContentLoader
      height={500}
      width={600}
      speed={2}
      primaryColor="#dfdcdc"
      secondaryColor="#ecebeb"
    >
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
      <rect x="71" y="36" rx="3" ry="3" width="85" height="6" />
      <rect x="5" y="229" rx="3" ry="3" width="540" height="6" />
      <rect x="4" y="249" rx="3" ry="3" width="540" height="6" />
      <rect x="5" y="206" rx="3" ry="3" width="200" height="13" />
      <circle cx="30" cy="30" r="30" />
      <rect x="5" y="77" rx="0" ry="0" width="555" height="116" />
      <rect x="79" y="297" rx="4" ry="4" width="117" height="6" />
      <rect x="5" y="229" rx="3" ry="3" width="540" height="6" />
      <rect x="4" y="249" rx="3" ry="3" width="540" height="6" />
      <rect x="5" y="206" rx="3" ry="3" width="200" height="13" />
      <circle cx="39" cy="312" r="30" />
      <rect x="7" y="354" rx="0" ry="0" width="555" height="116" />
      <rect x="80" y="322" rx="3" ry="3" width="85" height="6" />
      <rect x="8" y="479" rx="3" ry="3" width="200" height="13" />
    </ContentLoader>
  );
};

const getLoaderType = props => ({
  gridFeatured: <GridFeatured />,
  grid: <Grid />,
  list: <List />,
  bulletList: <BulletList />,
  code: <Code />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  blogList: <BlogList />,
  rectangle: <Rectangle />
});

function PlaceholderLoader({ type = "list", ...props }) {
  return getLoaderType(props)[type];
}

PlaceholderLoader.propTypes = {
  type: PropTypes.oneOf(keys(getLoaderType()))
};

export default PlaceholderLoader;
