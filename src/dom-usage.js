import { find, innerHTMLAppend, innerHTMLPrepend } from "./dom";

/**
 * Using find(selector: string) sample, with Promise style response handling
 * @param {String} selector
 */
export const findElement = (selector) => {
  find(selector)
    .then((el) => guiLogHelper(el))
    .catch((error) => guiLogHelper(error));
};

/**
 * Using find(selector: string) sample, with async/await style response handling
 * @param {String} selector
 */
export const findElementAsyncAwait = async (selector) => {
  try {
    const el = await find(selector);
    guiLogHelper(el);
  } catch (error) {
    guiLogHelper(error);
  }
};

/**
 * Just a gui log helper function
 */
const guiLogHelper = (html) => {
  innerHTMLPrepend(".log-content", html, { wrap: "div" });
};
