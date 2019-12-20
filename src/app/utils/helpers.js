import { includes } from "lodash";
import ReactHtmlParser from "react-html-parser";

/**
 * Parses html and strips any tags designated in the blacklist array
 * @param {string} html
 * @param {object} options
 * @returns {Array}
 */
export const htmlParser = (html, options = {}) => {
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
