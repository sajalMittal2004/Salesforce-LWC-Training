import { createElement } from 'lwc';
import MessangerB from 'c/messangerB';
import { subscribe, unsubscribe, publish, MessageContext } from 'lightning/messageService';
import TRANSFER_MESSAGE_CHANNEL from '@salesforce/messageChannel/transferMessage__c';

jest.mock('lightning/messageService', () => {
    return {
        subscribe: jest.fn(),
        unsubscribe: jest.fn(),
        publish: jest.fn(),
        MessageContext: jest.fn()
    };
});

describe('c-messanger-b', () => {
    let element;
    beforeEach(() => {
        element = createElement('c-messanger-b', {
            is: MessangerB
        });
        document.body.appendChild(element);
    });
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('should render messangerB component', () => {
        expect(element).not.toBeNull();

        const card = element.shadowRoot.querySelector('lightning-card');
        expect(card).not.toBeNull();

        const inputElement = element.shadowRoot.querySelector('lightning-input');
        expect(inputElement).not.toBeNull();

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });

});