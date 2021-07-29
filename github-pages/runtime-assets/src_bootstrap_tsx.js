/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend_runtime"] = self["webpackChunkfrontend_runtime"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apps_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps-box */ \"./src/apps-box.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_FunctionBasedApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/FunctionBasedApp */ \"./src/utils/FunctionBasedApp.tsx\");\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Home page\"));\n};\n\nconst App = ({\n  rootNode\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n  exact: true,\n  path: \"/login\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apps_box__WEBPACK_IMPORTED_MODULE_1__.LoginApp, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n  exact: true,\n  path: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apps_box__WEBPACK_IMPORTED_MODULE_1__.NavApp, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n  exact: true,\n  path: \"/editor\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apps_box__WEBPACK_IMPORTED_MODULE_1__.NavApp, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_FunctionBasedApp__WEBPACK_IMPORTED_MODULE_3__.default, {\n  appLauncher: _apps_box__WEBPACK_IMPORTED_MODULE_1__.PetriEditorApp,\n  rootNode: rootNode\n})))));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://frontend-runtime/./src/App.tsx?");

/***/ }),

/***/ "./src/apps-box.tsx":
/*!**************************!*\
  !*** ./src/apps-box.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginApp\": () => (/* binding */ LoginApp),\n/* harmony export */   \"NavApp\": () => (/* binding */ NavApp),\n/* harmony export */   \"PetriEditorApp\": () => (/* binding */ PetriEditorApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_wrapReactFederatedModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/wrapReactFederatedModule */ \"./src/utils/wrapReactFederatedModule.tsx\");\n\n\n\nconst defaultErrorHandler = module => error => {\n  console.error(`${module}: `, `Could not load the ${module} app. Is it up and running?`, `\\nError detail: ${error.message}`);\n  return Promise.resolve({\n    default: () => null\n  });\n};\n\nconst LoginApp = (0,_utils_wrapReactFederatedModule__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_login_Login\").then(__webpack_require__.t.bind(__webpack_require__, /*! login/Login */ \"webpack/container/remote/login/Login\", 23)).catch(defaultErrorHandler('Login'));\n}));\nconst NavApp = (0,_utils_wrapReactFederatedModule__WEBPACK_IMPORTED_MODULE_1__.default)(\n/*#__PURE__*/\n// @ts-ignore\nreact__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_nav_Nav\").then(__webpack_require__.t.bind(__webpack_require__, /*! nav/Nav */ \"webpack/container/remote/nav/Nav\", 23)).catch(defaultErrorHandler('Nav'));\n})); // @ts-ignore\n\nconst PetriEditorApp = props => {\n  __webpack_require__.e(/*! import() */ \"webpack_container_remote_petri_editor_PetriEditor\").then(__webpack_require__.t.bind(__webpack_require__, /*! petri_editor/PetriEditor */ \"webpack/container/remote/petri_editor/PetriEditor\", 23)).then(({\n    default: LauncherFn\n  }) => {\n    LauncherFn(props);\n  }).catch(defaultErrorHandler('Nav'));\n  return null;\n};\n\n//# sourceURL=webpack://frontend-runtime/./src/apps-box.tsx?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\nconst rootNode = document.getElementById('root');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, {\n  rootNode: rootNode\n}), rootNode);\n\n//# sourceURL=webpack://frontend-runtime/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/utils/FunctionBasedApp.tsx":
/*!****************************************!*\
  !*** ./src/utils/FunctionBasedApp.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getOrCreateAuxDomNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOrCreateAuxDomNode */ \"./src/utils/getOrCreateAuxDomNode.ts\");\n\n\n\nconst FunctionBasedApp = ({\n  appLauncher,\n  rootNode\n}) => {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const auxNode = (0,_getOrCreateAuxDomNode__WEBPACK_IMPORTED_MODULE_1__.default)(rootNode);\n    appLauncher({\n      domNode: auxNode\n    });\n    return () => {\n      auxNode.remove();\n    };\n  }, []);\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunctionBasedApp);\n\n//# sourceURL=webpack://frontend-runtime/./src/utils/FunctionBasedApp.tsx?");

/***/ }),

/***/ "./src/utils/getOrCreateAuxDomNode.ts":
/*!********************************************!*\
  !*** ./src/utils/getOrCreateAuxDomNode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootDOMNode => {\n  let aux = rootDOMNode.querySelector('#aux-container');\n\n  if (!aux) {\n    aux = document.createElement('div');\n    aux.setAttribute('id', 'aux-container');\n    rootDOMNode.appendChild(aux);\n  }\n\n  return aux;\n});\n\n//# sourceURL=webpack://frontend-runtime/./src/utils/getOrCreateAuxDomNode.ts?");

/***/ }),

/***/ "./src/utils/wrapReactFederatedModule.tsx":
/*!************************************************!*\
  !*** ./src/utils/wrapReactFederatedModule.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?270f\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst wrapComponent = (Component, loadFallback = 'Loading', errorFallback = null) => {\n  return class WrappedFederatedModule extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n    state = {\n      hasError: false\n    };\n\n    static getDerivedStateFromError() {\n      return {\n        hasError: true\n      };\n    }\n\n    render() {\n      if (this.state.hasError) {\n        return errorFallback;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {\n        fallback: loadFallback\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, this.props));\n    }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapComponent);\n\n//# sourceURL=webpack://frontend-runtime/./src/utils/wrapReactFederatedModule.tsx?");

/***/ })

}]);