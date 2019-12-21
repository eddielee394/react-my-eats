import { includes } from "lodash";
import ReactHtmlParser from "react-html-parser";

/**
 * Parses html and strips any tags designated in the blacklist array
 * @param {string} html
 * @param {object} options
 * @returns {Array}
 */
export function htmlParser (html, options = {}) {
  const blacklist = [
    "applet",
    "base",
    "body",
    "canvas",
    "command",
    "embed",
    "frame",
    "frameset",
    "head",
    "iframe",
    "html",
    "link",
    "meta",
    "noscript",
    "object",
    "script",
    "style",
    "title"
  ];

  const transform = ({ type, name }, index) => {
    if (type === "tag" && includes(blacklist, name)) {
      return null;
    }
  };

  const data = ReactHtmlParser(html, { transform: transform, ...options });

  return data;
};


export function setRoutes(config, defaultAuth) {
  let routes = [...config.routes];

  if (config.settings || config.auth) {
    routes = routes.map(route => {
      let auth = config.auth ? [...config.auth] : defaultAuth || null;
      auth = route.auth ? [...auth, ...route.auth] : auth;
      return {
        ...route,
        settings: { ...config.settings, ...route.settings },
        auth
      };
    });
  }

  return [...routes];
}

export function generateRoutesFromConfigs(configs, defaultAuth) {
  let allRoutes = [];
  configs.forEach(config => {
    allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
  });
  return allRoutes;
}
