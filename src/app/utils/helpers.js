import { includes } from "lodash";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";

/**
 * Parses html and strips any tags designated in the blacklist array
 * @param {string} html
 * @param {object} options
 * @returns {Array}
 */
export function htmlParser(html, options = {}) {
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
}

/**
 * Sets the configured routes
 * @param config
 * @returns {*[]}
 */
export function setRoutes(config) {
  let routes = [...config.routes];

  if (config.settings || config.auth) {
    routes = routes.map(route => {
      return {
        ...route,
        settings: { ...config.settings, ...route.settings }
      };
    });
  }

  return [...routes];
}

/**
 * Maps over the configured routes
 * @param {array} configs
 * @returns {[]}
 */
export function generateRoutesFromConfigs(configs) {
  let allRoutes = [];
  configs.forEach(config => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });
  return allRoutes;
}

/**
 * Formats timestamp as human readable "from now" format
 * @param {Date} timestamp
 * @returns {string}
 */
export function formatTimeFromNow(timestamp) {
  return moment(timestamp).fromNow();
}

/**
 * Helper method to filter a collection by an object prop value from another collection
 * @param {array || object } collection collection to be iterated over
 * @param {array || object} sources source collection containing object that is to be compared
 * @returns {array || object}
 */
export function filterCollectionByObjProp(collection, sources) {
  return collection.filter(data =>
    sources.some(source => data.ingredientId === source.uuid)
  );
}
