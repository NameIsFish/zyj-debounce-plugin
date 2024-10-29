import { createApp } from "vue";

function zyjDebounce(fn, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) {
        fn.apply(context, args);
      }
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    };
  };
}

export default {
  install(app, options) {
    app.config.globalProperties.$zyjDebounce = zyjDebounce;
  }
};