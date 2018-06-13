"use strict";
NodeList.prototype.forEach = Array.prototype.forEach;
var Tooltip = /** @class */ (function () {
    /**
     * Tooltip constructor
     * @param {string} el
     * @param title
     * @param {OptionsInterface} options
     */
    function Tooltip(elms, title, options) {
        /**
         * Tooltip options
         * @type {{color: string; bgcolor: string}}
         */
        this.options = { color: "#fff", bgcolor: "#000" };
        if (options !== undefined)
            this.options = options;
        this.elms = document.querySelectorAll(elms);
        if (this.elms.length < 1)
            throw new Error("Elements is not defined");
        this.title = title;
        this.bind();
    }
    /**
     * Initial method
     */
    Tooltip.prototype.bind = function () {
        var _this = this;
        [].forEach.call(this.elms, function (el) {
            el.addEventListener("mouseenter", function (e) { return _this.handleEnter(el, e); });
            el.addEventListener("mouseleave", function (e) { return _this.handleLeave(el, e); });
        });
    };
    /**
     * Handle the enter of the mouse on the element
     */
    Tooltip.prototype.handleEnter = function (el, e) {
        // Tooltip top position
        var top = el.getBoundingClientRect().top;
        // tooltip left position
        var left = el.getBoundingClientRect().left;
        // tooltip element
        var tooltip = this.createTooltip();
        // building the element
        tooltip.innerHTML = this.title;
        tooltip.style.background = this.options.bgcolor;
        tooltip.style.color = this.options.color;
        tooltip.style.top = top - el.getBoundingClientRect().height - 20 + "px";
        tooltip.style.left = el.getBoundingClientRect().width / 2 - tooltip.offsetWidth / 2 + "px";
        // append to the body
        document.body.appendChild(tooltip);
    };
    Tooltip.prototype.handleLeave = function (el, e) {
        var tooltips = document.querySelectorAll(".tooltip");
        Array.prototype.forEach.call(tooltips, function (el) { return document.body.removeChild(el); });
    };
    /**
     * Creates the tooltpic
     * @returns {Element}
     */
    Tooltip.prototype.createTooltip = function () {
        var el = document.createElement("div");
        el.classList.add("tooltip");
        return el;
    };
    return Tooltip;
}());
//# sourceMappingURL=Tooltip.js.map