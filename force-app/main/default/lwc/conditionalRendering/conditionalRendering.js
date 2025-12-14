import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    // Variables

    displaySetting = true
    displaySimple = false
    displaySizes = false
    displayDisabled = false

    // Methods

    toggleDisplaySimple(event) {
        this.displaySimple = this.displaySimple === false ? true : false
        this.displaySizes = false
        this.displayDisabled = false
    }

    toggleDisplaySizes(event) {
        this.displaySizes = this.displaySizes === false ? true : false
        this.displaySimple = false
        this.displayDisabled = false
    }

    toggleDisplayDisabled(event) {
        this.displayDisabled = this.displayDisabled === false ? true : false
        this.displaySizes = false
        this.displaySimple = false
    }
}
