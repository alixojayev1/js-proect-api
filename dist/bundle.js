/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/loader.js":
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loaderS(){
    const loader = document.querySelector(".wrapper-loader");
    setTimeout(() => {
      loader.classList.add("loader-none");
    }, 2000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderS);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal(){
    const modalOpenBtns = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-modal-close]");

  function openModel() {
    modal.classList.add("show", "fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }
  function closeModel() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", openModel);
  });

  modalCloseBtn.addEventListener("click", closeModel);

  const modalTimeId = setTimeout(openModel, 5000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(){
    const slides = document.querySelectorAll(".offer__slide"),
    slidesInner = document.querySelector(".offer__slider-inner"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total");

  let slideInd = 1;
  showIndex(slideInd);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showIndex(index) {
    if (index > slides.length) {
      slideInd = 1;
    }

    if (index < 1) {
      slideInd = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));

    slides[slideInd - 1].style.display = "block";

    if (slides.length < 10) {
      current.textContent = `0${slideInd}`;
    } else {
      current.textContent = slideInd;
    }
  }
  function moveSlides(index) {
    showIndex((slideInd += index));
  }

  prev.addEventListener("click", () => {
    moveSlides(-1);
  });
  next.addEventListener("click", () => {
    moveSlides(+1);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(){
    const tabParent = document.querySelector(".tabheader__items"),
    tab = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content");

  function hideTabContents() {
    tab.forEach((tabs) => {
      tabs.classList.remove("tabheader__item_active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.add("hide");
      tabContent.classList.add("show");
    });
  }

  function showTabContent(index = 0) {
    tab[index].classList.add("tabheader__item_active");
    tabContents[index].classList.add("show", "fade");
    tabContents[index].classList.remove("hide");
  }
  hideTabContents();
  showTabContent();

  tabParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tab.forEach((tabs, index) => {
        if (target === tabs) {
          hideTabContents();
          showTabContent(index);
        }
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/tgmBot.js":
/*!******************************!*\
  !*** ./js/modules/tgmBot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tgmBot(){
    const form = document.querySelector("form"),
    tgmBotToken = "6603555551:AAFOLAFKCBbfZN_G_ZrtxhT-sHIr0HtTbMo",
    chatId = "1903488561";

  const message = {
    loading: "Loading...",
    succsess: "Malumot jonatildi",
    error: "Malumot jonatilmadi ",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMsg = document.createElement("div");
    statusMsg.textContent = message.loading;

    form.append(statusMsg);

    formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch(`https://api.telegram.org/bot${tgmBotToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Name: ${object.name}, Phone: ${object.phone}`,
      }),
    })
      .then(() => ((statusMsg.textContent = message.succsess), form.reset()))
      .catch(() => (statusMsg.textContent = message.error))
      .finally(() => {
        setTimeout(() => {
          statusMsg.remove();
        }, 1500);
      });
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tgmBot);

/***/ }),

/***/ "./js/modules/time.js":
/*!****************************!*\
  !*** ./js/modules/time.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timeS(){
    let dedline = "2024-03-01";

    function getStartTime(endtime) {
      const time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((time / (1000 * 60)) % 60),
        seconds = Math.floor((time / (1000 * 60)) % 60);
  
      return {
        totalTime: time,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds "),
        timeInterval = setInterval(updateClock, 1000);
      updateClock();
      function updateClock() {
        const time = getStartTime(endtime);
        days.textContent = time.days;
        hours.textContent = time.hours;
        minutes.textContent = time.minutes;
        seconds.textContent = time.seconds;
  
        if (time.totalTime <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
    setClock(".timer", dedline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeS);

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader */ "./js/modules/loader.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_tgmBot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tgmBot */ "./js/modules/tgmBot.js");
/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/time */ "./js/modules/time.js");







window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_loader__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_time__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_tgmBot__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map