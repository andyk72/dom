/**
 * Tries to find the DOM element identified by selector
 * Keeps on trying for stopFindinsAfterMs time
 * @param {String} selector
 * @param {Number} stopFindingAfterMs optional
 * @returns Promise
 */
export const find = (selector, stopFindingAfterMs = 5000) => {
  const findFrequency = 1 * 100;
  return new Promise((resolve, reject) => {
    let time = 0;
    let i = setInterval(function () {
      const $el = document.querySelector(selector);
      if ($el) {
        clearInterval(i);
        resolve($el);
      }
      time += findFrequency;
      if (time >= stopFindingAfterMs) {
        clearInterval(i);
        reject(`Element ${selector} not found`);
      }
    }, findFrequency);
  });
};

/**
 * Sets the selector DOM element innerHTML
 * 3 write modes (driven by options.mode):
 *  1) overwrite
 *  2) prepeand
 *  3) append
 * @param {String} selector
 * @param {String} html
 * @param {Object} options
 *  .mode {String} optional
 *    ['prepend'|'append'|undefined]
 *    When undefined, the innerHTML is overwritten
 *  .wrap {String} optional
 *    If provided, wraps html into the html element defined by wrap
 */
export const innerHTML = (
  selector,
  html,
  options = {
    mode: false,
    wrap: false
  }
) => {
    
  const el = document.querySelector(selector);

  if (!el) {
    return;
  }

  const mode = options.mode;
  const wrap = options.wrap;

  if (wrap) {
    html = `<${wrap}>${html}<${wrap}/>`;
  }

  switch (mode) {
    case "prepend":
      el.innerHTML = html + el.innerHTML;
      break;
    case "append":
      el.innerHTML += html;
      break;
    default:
      el.innerHTML = html;
  }

  return el;
};

export const innerHTMLAppend = (selector, html, options) => {
  return innerHTML(selector, html, {
    ...options,
    mode: "append"
  });
};

export const innerHTMLPrepend = (selector, html, options) => {
  return innerHTML(selector, html, {
    ...options,
    mode: "prepend"
  });
};
