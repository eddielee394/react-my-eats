import React from "react";
import ContentLoader, {
  Instagram,
  Facebook,
  Code,
  List,
  BulletList
} from "react-content-loader";

const Rectangle = () => (
  <ContentLoader
    height={475}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="-2" y="35" rx="5" ry="5" width="550" height="400" />
  </ContentLoader>
);

const BlogList = () => (
  <ContentLoader
    height={500}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
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

function CardItemLoader({ type }, props) {
  switch (type) {
    case "list":
      return <List />;
    case "bulletList":
      return <BulletList />;
    case "code":
      return <Code />;
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "blogList":
      return <BlogList />;
    case "rectangle":
      return <Rectangle />;
    default:
      return <Instagram />;
  }
}

export default CardItemLoader;
