import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    // default component variables
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;


    // Custom variables to practice conditional rendering
    displaySetting = true
    displaySimple = false
    displaySizes = false
    displayDisabled = false

    // Custom methods to practice conditional rendering

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

    // ----------------------------

    // default component methods
    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] =
            !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}
