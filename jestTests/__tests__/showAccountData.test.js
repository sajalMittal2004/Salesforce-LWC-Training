import { createElement } from 'lwc';
import ShowAccountData from 'c/showAccountData';

describe('c-show-account-data', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders lightning-record-form with correct fields', () => {
        const element = createElement('c-show-account-data', {
            is: ShowAccountData
        });

        document.body.appendChild(element);
        
        const recordForm = element.shadowRoot.querySelector('lightning-record-form');
        expect(recordForm).not.toBeNull();
        expect(recordForm.fields).toEqual(["Name", "Company", "Phone", "Website"]);
        expect(recordForm.fields).not.toEqual(["Name", "Industry", "Phone", "Website"]);
    });

    it('displays create-contact component when "Create New Contact" button is clicked', () => {
        const element = createElement('c-show-account-data', {
            is: ShowAccountData
        });

        document.body.appendChild(element);

        const createContactComp = element.shadowRoot.querySelector('c-create-contact');
        console.log('createContactComp');
        expect(createContactComp).toBeNull();

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        return Promise.resolve().then(() => {
            const createContactComp = element.shadowRoot.querySelector('c-create-contact');
            expect(createContactComp).not.toBeNull();
        });
    });
});