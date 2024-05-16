/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  var navButtons = document.querySelectorAll("#navMenu button");
  var menuList = document.querySelector("#menuList");
  var menuListItems = document.querySelectorAll("#menuListItem a");
  var header = document.querySelector("header");
  var burgerMenu = document.querySelector("#burgerMenu");
  navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var navValue = this.getAttribute("data-nav");

      // 顯示 menuList
      menuList.classList.add("!translate-y-0", "!opacity-100");

      // 為對應的 menuListItem 添加 class
      menuListItems.forEach(function (item) {
        if (item.getAttribute("data-list") === navValue) {
          item.classList.add("!border-black");
        } else {
          item.classList.remove("!border-black");
        }
      });
    });
  });

  // 如果點擊的不是 header 或 menuList，則隱藏 menuList
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target) && !menuList.contains(event.target)) {
      menuList.classList.remove("!translate-y-0", "!opacity-100");
    }
  });

  // 按下 esc 鍵，則隱藏 menuList
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menuList.classList.remove("!translate-y-0", "!opacity-100");
    }
  });

  // 手機版
  burgerMenu.addEventListener("click", function () {
    // 視窗寬度小於 1024px，則切換 menuList 的顯示狀態
    if (window.innerWidth < 1024) {
      menuList.classList.toggle("!translate-x-0");
    }
  });
});

/***/ }),
/* 2 */
/***/ (function() {

// gotop
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
document.addEventListener("DOMContentLoaded", function () {
  var goTopButton = document.querySelector("#gotop");
  var windowViewPortHeight = window.innerHeight;
  var isRequestingAnimationFrame = false;
  if (!goTopButton) {
    return;
  }
  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  window.addEventListener("scroll", function () {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });
  function filterGoTopButtonVisibility() {
    var windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add("show");
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove("show");
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
});
// gotop end

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gotop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _gotop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gotop__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener("DOMContentLoaded", function () {
  // 主輪播
  new Swiper(".swiper-main", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 1
      }
    },
    pagination: {
      el: ".swiper-main-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-main-next",
      prevEl: ".swiper-button-main-prev"
    }
  });

  // 全站分類熱銷推薦
  new Swiper(".swiper-recommend", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        freeMode: false,
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: ".swiper-button-recommend-next",
      prevEl: ".swiper-button-recommend-prev"
    },
    scrollbar: {
      el: ".swiper-recommend-scrollbar"
    }
  });
});
}();
/******/ })()
;