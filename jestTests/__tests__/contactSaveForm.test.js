import { createElement } from 'lwc';
import ContactSaveForm from 'c/contactSaveForm';

describe('c-contact-save-form', () => {
    
    let element;

    beforeEach(() => {
        element = createElement('c-create-contact-save-form', {
            is: ContactSaveForm
        });

        document.body.appendChild(element);
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('should render ContactSaveForm component', () => {
        expect(element).not.toBeNull();

        const inputs = element.shadowRoot.querySelectorAll('lightning-input');
        expect(inputs.length).toBeGreaterThan(0);

        const buttons = element.shadowRoot.querySelectorAll('button');
        expect(buttons.length).toBeGreaterThan(0);
    });

});