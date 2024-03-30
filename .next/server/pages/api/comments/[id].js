"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comments/[id]";
exports.ids = ["pages/api/comments/[id]"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/comments/[id].ts":
/*!************************************!*\
  !*** ./pages/api/comments/[id].ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\n// Next.js에서 제공하는 res.json은 \\n을 자동으로 추가하기 때문에 새로 만든 함수입니다.\nconst responseJSON = (res, status, json)=>{\n    res.status(status).setHeader(\"Content-Type\", \"application/json; charset=utf-8\").send(json);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { id , cursor  } = req.query;\n    if (req.method === \"POST\") {\n        if (!req.body.content) {\n            return responseJSON(res, 400, {\n                message: \"content is required\"\n            });\n        }\n        try {\n            const result = await notion.comments.create({\n                parent: {\n                    page_id: id\n                },\n                rich_text: [\n                    {\n                        text: {\n                            content: req.body.content\n                        }\n                    }, \n                ]\n            });\n            return responseJSON(res, 200, result);\n        } catch (error) {\n            return responseJSON(res, error.status, error.body);\n        }\n    } else if (req.method === \"GET\") {\n        try {\n            const result1 = await notion.comments.list({\n                block_id: id,\n                ...cursor && {\n                    start_cursor: cursor\n                }\n            });\n            return responseJSON(res, 200, result1);\n        } catch (error1) {\n            return responseJSON(res, error1.status, error1.body);\n        }\n    }\n    return responseJSON(res, 405, {\n        message: \"method not allowed\"\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFJMUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELG9EQUFNLENBQUM7SUFBRUUsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztDQUFFLENBQUM7QUFFL0QsMERBQTBEO0FBQzFELE1BQU1DLFlBQVksR0FBRyxDQUFDQyxHQUFvQixFQUFFQyxNQUFjLEVBQUVDLElBQVMsR0FBSztJQUN4RUYsR0FBRyxDQUFDQyxNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDRSxTQUFTLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUVELGlFQUFlLE9BQU9HLEdBQW1CLEVBQUVMLEdBQW9CLEdBQUs7SUFDbEUsTUFBTSxFQUFFTSxFQUFFLEdBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFaEMsSUFBSUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUksQ0FBQ0osR0FBRyxDQUFDSyxJQUFJLENBQUNDLE9BQU8sRUFBRTtZQUNyQixPQUFPWixZQUFZLENBQUNDLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQUVZLE9BQU8sRUFBRSxxQkFBcUI7YUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTW5CLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUMxQ0MsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUVYLEVBQUU7aUJBQ1o7Z0JBQ0RZLFNBQVMsRUFBRTtvQkFDVDt3QkFDRUMsSUFBSSxFQUFFOzRCQUNKUixPQUFPLEVBQUVOLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxPQUFPO3lCQUMxQjtxQkFDRjtpQkFDRjthQUNGLENBQUM7WUFFRixPQUFPWixZQUFZLENBQUNDLEdBQUcsRUFBRSxHQUFHLEVBQUVhLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsT0FBT08sS0FBSyxFQUFFO1lBQ2QsT0FBT3JCLFlBQVksQ0FBQ0MsR0FBRyxFQUFFb0IsS0FBSyxDQUFDbkIsTUFBTSxFQUFFbUIsS0FBSyxDQUFDVixJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsT0FBTyxJQUFJTCxHQUFHLENBQUNJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDL0IsSUFBSTtZQUNGLE1BQU1JLE9BQU0sR0FBRyxNQUFNbkIsTUFBTSxDQUFDb0IsUUFBUSxDQUFDTyxJQUFJLENBQUM7Z0JBQ3hDQyxRQUFRLEVBQUVoQixFQUFFO2dCQUNaLEdBQUlDLE1BQU0sSUFBSTtvQkFBRWdCLFlBQVksRUFBRWhCLE1BQU07aUJBQVk7YUFDakQsQ0FBQztZQUVGLE9BQU9SLFlBQVksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsRUFBRWEsT0FBTSxDQUFDLENBQUM7UUFDeEMsRUFBRSxPQUFPTyxNQUFLLEVBQUU7WUFDZCxPQUFPckIsWUFBWSxDQUFDQyxHQUFHLEVBQUVvQixNQUFLLENBQUNuQixNQUFNLEVBQUVtQixNQUFLLENBQUNWLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1gsWUFBWSxDQUFDQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQUVZLE9BQU8sRUFBRSxvQkFBb0I7S0FBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW5vdGlvbi1zdGFydGVyLWtpdC8uL3BhZ2VzL2FwaS9jb21tZW50cy9baWRdLnRzPzkxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVkgfSk7XHJcblxyXG4vLyBOZXh0Lmpz7JeQ7IScIOygnOqzte2VmOuKlCByZXMuanNvbuydgCBcXG7snYQg7J6Q64+Z7Jy866GcIOy2lOqwgO2VmOq4sCDrlYzrrLjsl5Ag7IOI66GcIOunjOuToCDtlajsiJjsnoXri4jri6QuXHJcbmNvbnN0IHJlc3BvbnNlSlNPTiA9IChyZXM6IE5leHRBcGlSZXNwb25zZSwgc3RhdHVzOiBudW1iZXIsIGpzb246IGFueSkgPT4ge1xyXG4gIHJlcy5zdGF0dXMoc3RhdHVzKS5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2VuZChqc29uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIGN1cnNvciB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBpZiAoIXJlcS5ib2R5LmNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlSlNPTihyZXMsIDQwMCwgeyBtZXNzYWdlOiAnY29udGVudCBpcyByZXF1aXJlZCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbm90aW9uLmNvbW1lbnRzLmNyZWF0ZSh7XHJcbiAgICAgICAgcGFyZW50OiB7XHJcbiAgICAgICAgICBwYWdlX2lkOiBpZCBhcyBzdHJpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWNoX3RleHQ6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcS5ib2R5LmNvbnRlbnQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlSlNPTihyZXMsIDIwMCwgcmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZUpTT04ocmVzLCBlcnJvci5zdGF0dXMsIGVycm9yLmJvZHkpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5vdGlvbi5jb21tZW50cy5saXN0KHtcclxuICAgICAgICBibG9ja19pZDogaWQgYXMgc3RyaW5nLFxyXG4gICAgICAgIC4uLihjdXJzb3IgJiYgeyBzdGFydF9jdXJzb3I6IGN1cnNvciBhcyBzdHJpbmcgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlSlNPTihyZXMsIDIwMCwgcmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZUpTT04ocmVzLCBlcnJvci5zdGF0dXMsIGVycm9yLmJvZHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTihyZXMsIDQwNSwgeyBtZXNzYWdlOiAnbWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkNsaWVudCIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9LRVkiLCJyZXNwb25zZUpTT04iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic2V0SGVhZGVyIiwic2VuZCIsInJlcSIsImlkIiwiY3Vyc29yIiwicXVlcnkiLCJtZXRob2QiLCJib2R5IiwiY29udGVudCIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJjb21tZW50cyIsImNyZWF0ZSIsInBhcmVudCIsInBhZ2VfaWQiLCJyaWNoX3RleHQiLCJ0ZXh0IiwiZXJyb3IiLCJsaXN0IiwiYmxvY2tfaWQiLCJzdGFydF9jdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[id].ts"));
module.exports = __webpack_exports__;

})();