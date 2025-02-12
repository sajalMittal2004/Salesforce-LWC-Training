import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createContact from '@salesforce/apex/AccountManagerWizardController.createContact';

export default class ContactSaveForm extends LightningElement  {
    @api accId;
    @api accName;

    contact = {};
    handleCloseWizard() {
        const event = new CustomEvent('closeform', {
            detail: { isVisible: false }
        });
        this.dispatchEvent(event);
    }

    handleClick() {
        const inputs = this.template.querySelectorAll('lightning-input');
        let contact = {};
        try {
            inputs.forEach(input => {
                if (input.name === "Email" && input.value === '') {
                    throw new Error('Email can not be blank')
                }
                else {
                    if (input.name === "AccountId") {
                        contact[input.name] = this.accId;
                    } else {
                        contact[input.name] = input.value;
                    }
                }
            });

            this.contact = contact;
            createContact({ con: this.contact })
            .then(() => {
                this.dispatchEvent(new CustomEvent('contactcreated'));
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: "error",
                    }),
                );
            })
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Email Error",
                    message: error.message,
                    variant: "error",
                })
            );
        }
    }
}