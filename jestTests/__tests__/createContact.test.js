import { createElement } from 'lwc';
import CreateContact from 'c/createContact';

describe('c-create-contact', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders the form with input fields', () => {
        const element = createElement('c-create-contact', {
            is: CreateContact
        });

        document.body.appendChild(element);

        const form = element.shadowRoot.querySelector('lightning-record-edit-form');
        expect(form).not.toBeNull();

        const inputFields = element.shadowRoot.querySelectorAll('lightning-input-field');
        expect(inputFields.length).toBe(5);

        const buttons = element.shadowRoot.querySelectorAll('lightning-button');
        const cancelButton = Array.from(buttons).find(btn => btn.label === "Cancel"); 
        expect(cancelButton).not.toBeNull();

        const createButton = Array.from(buttons).find(btn => btn.label === "Create Contact"); 
        expect(createButton).not.toBeNull();
    });
});