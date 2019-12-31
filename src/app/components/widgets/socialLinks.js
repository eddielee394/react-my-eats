import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {IconButton} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import GitHubIcon from "@material-ui/icons/GitHub";

const _renderSocialIcons = props => ({
  web: <EmojiObjectsIcon {...props} />,
  github: <GitHubIcon {...props} />,
  linkedin: <LinkedInIcon {...props} />,
  twitter: <TwitterIcon {...props} />
});

const links = [
  { type: "web", url: "https://lamplightsolutions.net" },
  { type: "github", url: "https://github.com/eddielee394" },
  { type: "linkedin", url: "https://www.linkedin.com/in/eddie-padin/" },
  { type: "twitter", url: "https://twitter.com/xerotrade" }
];

function SocialLinks({ className, buttonProps, iconProps }) {
  return (
    <div className={clsx(className, "w-full")}>
      {links.map(link => (
        <IconButton
          key={link.type}
          href={link.url}
          target="_blank"
          rel="noopener"
          {...buttonProps}
        >
          {_renderSocialIcons(iconProps)[link.type]}
        </IconButton>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  className: PropTypes.string,
  buttonProps: PropTypes.object,
  iconProps: PropTypes.object
};

export default SocialLinks;
