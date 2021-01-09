import "./styles.css";
import { findElement, findElementAsyncAwait } from "./dom-usage";

function createElementAfterTime(className, ms) {
  setTimeout(() => {
    const el = document.createElement("div");
    el.setAttribute("class", className);
    el.innerHTML = `${className}!`;
    document.querySelector(".content-content").appendChild(el);
  }, ms);
}

createElementAfterTime("hello", 3 * 1000);
createElementAfterTime("world", 4 * 1000);
findElement("body");
findElement(".hello");
findElementAsyncAwait(".world");
findElementAsyncAwait(".i-do-not-exist");
