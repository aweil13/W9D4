/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
     constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        
        // this.$el.addEventListener('click', this.handleClick)
        this.$el.click(this.$el, this.handleClick.bind(this));
    }

    render() {
        if (this.followState === false) {
            debugger
            // this.$el.text("FOLLOW");
        }
        else if (this.followState === true){
            debugger
            // this.$el.text("UNFOLLOW");
        }
    }

    handleClick(e) {
       
        // e.preventDefault();
        if (this.followState === false) {
            $.ajax({
                method: "POST",
                url: `/users/${this.userId}/follow`,
                dataType: "json",
                success:  () => {this.followState = true;},
                
            });
        }
        else if (this.followState === true) {
            $.ajax({
                method: "DELETE",
                url: `/users/${this.userId}/follow`,
                dataType: "json",
                success:  () => {this.followState = false;},
            });
        }
    }

}

module.exports = FollowToggle;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$( () => {
    const $els = $("button.follow-toggle")
    $els.each( (idx, el) => {
        new FollowToggle(el);

    })
    
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map