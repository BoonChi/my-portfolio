"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 7747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rk": () => (/* binding */ addTodo),
/* harmony export */   "CU": () => (/* binding */ updateTodo),
/* harmony export */   "jV": () => (/* binding */ selectTodoList),
/* harmony export */   "O9": () => (/* binding */ selectActionReducer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports todoSlice, removeTodo, completedTodo */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5117);


const todoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action)=>{
                state.push(action.payload);
            },
            prepare: (desc)=>{
                const id = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.nanoid)();
                return {
                    payload: {
                        id,
                        desc,
                        completed: false
                    }
                };
            }
        },
        removeTodo: (state, action)=>{
            state.splice(state.findIndex((todo)=>todo.id === action.payload
            ), 1);
        },
        completedTodo: (state, action)=>{
            const todo1 = state.find((todo)=>todo.id === action.payload
            );
            todo1 ? todo1.completed = !todo1.completed : null;
        },
        updateTodo: (state, action)=>{
            const todo2 = state.find((todo)=>todo.id === action.payload.id
            );
            todo2 ? todo2.desc = action.payload.desc : null;
        }
    }
});
// Action creators are generated for each case reducer function
const { addTodo , removeTodo , completedTodo , updateTodo  } = todoSlice.actions;
const selectTodoList = (state)=>state.todo
;
const selectActionReducer = (buttonName, todoItemId)=>(dispatch)=>{
        switch(buttonName){
            case _constant_index__WEBPACK_IMPORTED_MODULE_1__/* .todoItemAction["delete"] */ .nX["delete"]:
                return dispatch(removeTodo(todoItemId));
            case _constant_index__WEBPACK_IMPORTED_MODULE_1__/* .todoItemAction.completed */ .nX.completed:
                return dispatch(completedTodo(todoItemId));
            default:
                return alert("Invalid Action");
        }
    }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoSlice.reducer);


/***/ }),

/***/ 5117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nX": () => (/* binding */ todoItemAction),
/* harmony export */   "Ku": () => (/* binding */ todoItemActionArray)
/* harmony export */ });
/* unused harmony exports todoCategory, todoCategoryArr */
var todoCategory;
(function(todoCategory) {
    todoCategory["green"] = "Green";
    todoCategory["red"] = "Red";
    todoCategory["blue"] = "Blue";
})(todoCategory || (todoCategory = {}));
const todoCategoryArr = Object.values(todoCategory);
var todoItemAction;
(function(todoItemAction) {
    todoItemAction["edit"] = 'Edit';
    todoItemAction["delete"] = 'Delete';
    todoItemAction["completed"] = 'Completed';
})(todoItemAction || (todoItemAction = {}));
const todoItemActionArray = Object.values(todoItemAction);


/***/ })

};
;