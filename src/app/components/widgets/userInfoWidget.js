import React from "react";
import clsx from "clsx";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { formatThousandsToK } from "../../utils/helpers";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  userSubtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  userCaption: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  userCaptionIcon: {
    fontSize: theme.typography.body1.fontSize,
    marginRight: ".25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  userAvatar: {
    [theme.breakpoints.down("sm")]: {
      width: 115,
      height: "auto"
    }
  }
}));

function UserInfoWidget({ className, user, ...props }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        className,
        "flex flex-col flex-1 md:flex-row items-center"
      )}
    >
      <Avatar
        className={classes.userAvatar}
        alt={`${user.firstName} ${user.lastName}`}
        src={user.avatarUrl}
      />
      <div className="text-center md:text-left">
        <Typography
          className={clsx(classes.userSubtitle, "block")}
          component="span"
          variant="subtitle2"
          color="textPrimary"
        >
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <Typography
          className={clsx(classes.userCaption, "inline-flex self-center mr-5")}
          variant="caption"
          component="span"
        >
          <GroupIcon className={classes.userCaptionIcon} />
          {user.stats.followers}
        </Typography>
        <Typography
          className={clsx(classes.userCaption, "inline-flex self-center")}
          variant="caption"
          component="span"
        >
          <ThumbUpAltIcon
            fontSize="small"
            className={classes.userCaptionIcon}
          />
          {formatThousandsToK(user.stats.likesCount)}
        </Typography>
      </div>
    </div>
  );
}

UserInfoWidget.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object
};

export default UserInfoWidget;
