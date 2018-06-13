/**
 * Created by WebDev
 * Version: 1.0.1
 * A Tooltip Javascript library built with Typescript
 **/
/**
 * OptionInterface Interface
 */
interface OptionsInterface {
    color: string;
    bgcolor: string;
}
NodeList.prototype.forEach = Array.prototype.forEach;
class Tooltip {

    /**
     * Tooltip options
     * @type {{color: string; bgcolor: string}}
     */
    private options: OptionsInterface = {color: "#fff", bgcolor: "#000"}
    /**
     * Element that get a tooltip
     * @type {NodeListOf<Element>}
     */
    private elms: NodeListOf<Element>
    /**
     * Tooltip title
     * @type {string}
     */
    private title: string

    /**
     * Tooltip constructor
     * @param {string} el
     * @param title
     * @param {OptionsInterface} options
     */
    constructor(elms: string, title: string, options?: OptionsInterface) {
        if (options !== undefined) this.options = options
        this.elms = document.querySelectorAll(elms)
        if (this.elms.length < 1) throw new Error("Elements is not defined")
        this.title = title
        this.bind()
    }

    /**
     * Initial method
     */
    private bind(): void {
        [].forEach.call(this.elms, (el: HTMLElement) => {
            el.addEventListener("mouseenter", (e) => {
                this.handleEnter(el, e)
            })
        })
    }

    /**
     * Handle the enter of the mouse on the element
     */
    private handleEnter(el: HTMLElement, e: Event) {
        let top = el.getBoundingClientRect().top
        let left = el.getBoundingClientRect().left
        let tooltip = this.createTooltip()
        tooltip.innerHTML = this.title
        tooltip.style.background = this.options.bgcolor
        tooltip.style.color = this.options.color
        tooltip.style.top = top - el.getBoundingClientRect().height - 20 + "px"
        tooltip.style.left = el.getBoundingClientRect().width / 2 - tooltip.offsetWidth / 2 + "px"
        document.body.appendChild(tooltip)
    }

    /**
     * Creates the tooltpic
     * @returns {Element}
     */
    private createTooltip(): HTMLElement {
        let el = <HTMLElement>document.createElement("div")
        el.classList.add("tooltip")
        return el
    }



}