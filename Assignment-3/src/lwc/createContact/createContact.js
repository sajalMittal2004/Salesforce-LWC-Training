import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateContact extends LightningElement {

    @api isVisible;
    @api accountId;
    
    accId = this.recordId;
    handleClick(event) {
        this.resetValues();
        this.hideForm();
    }
    resetValues(event) {
        const inputFields = this.template.querySelectorAll("lightning-input-field");
        if(inputFields) {
            inputFields.forEach((field) => {
                field.reset();
            });
        }
    }
    hideForm() {
        const event = new CustomEvent('contactcreated', {
            detail: { isVisible: false}
        });
        this.dispatchEvent(event);
    }
    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Contact Record Created Successfully",
                message: event.detail.message,
                variant: "success",
            }),
        );
        this.hideForm();
    }
}