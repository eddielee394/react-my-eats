import { includes } from "lodash";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import { toast } from "react-toastify";

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

  const transform = ({ type, name }) => {
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
  //disable the deprec warnings temporarily
  moment.suppressDeprecationWarnings = true;

  return moment(timestamp).fromNow();
}

/**
 * Helper method to filter a collection by an object prop value from another collection
 * @param {array || object } collection collection to be iterated over
 * @param {array || object} sources source collection containing object that is to be compared
 * @param {string} collectionProp  collection property to be compared with
 * @param {string} sourceProp  source property to be compared to
 * @returns {array || object}
 */
export function filterCollectionByObjProp(
  collection,
  sources,
  collectionProp,
  sourceProp
) {
  return collection.filter(data =>
    sources.some(source => data[collectionProp] === source[sourceProp])
  );
}

/**
 * Generates dummy data in the form of an array of objects.
 * @param {object} props properties of each object. Each object has a default id property.
 * @param {number} count number of times the loop should run. defaults to 10.
 * @param {number} i starting index for the loop defaults to 0
 * @returns {[]}
 */
export function generateDummyData({ ...props }, count = 10, i = 0) {
  let data = [];

  for (i; i < count; i++) {
    data.push({
      id: i,
      ...props
    });
  }
  return data;
}

/**
 * Shows a toast notification
 * @param {string || null} message message to be displayed
 * @param {string} toastType Type of toast to be displayed.  WARNING | INFO | SUCCESS | ERROR | DEFAULT
 * @param {object || null} options toast configuration options.
 */
export function showNotification({
  message = null,
  toastType = "WARNING",
  options = {}
}) {
  const toastId = "notification";
  let content;

  !message
    ? (content = "Whoops! Looks like that feature isn't finished yet.")
    : (content = message);

  if (!toast.isActive(toastId)) {
    toast(content, {
      toastId: toastId,
      type: toast.TYPE[toastType],
      ...options
    });
  }
}
