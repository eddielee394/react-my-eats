import { lazy } from "react";

export const FeedConfig = {
  routes: [
    {
      path: "/feed",
      component: lazy(() => import("./feed.js"))
    }
  ]
};
