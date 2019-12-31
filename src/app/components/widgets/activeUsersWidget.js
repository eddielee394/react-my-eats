import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Avatar, Typography } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { showNotification } from "../../utils/helpers";

function ActiveUsersWidget({ className, users, ...props }) {
  return (
    <div className={clsx(className, "flex flex-col")}>
      <Typography variant="subtitle2">Most Active Today</Typography>
      <AvatarGroup>
        {users.map(user => (
          <Avatar
            key={user.id}
            component="button"
            onClick={showNotification}
            src={user.avatarUrl}
          />
        ))}
        <Avatar component="button" onClick={showNotification}>
          +{users.length}
        </Avatar>
      </AvatarGroup>
    </div>
  );
}

ActiveUsersWidget.propTypes = {
  className: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object)
};

export default ActiveUsersWidget;
