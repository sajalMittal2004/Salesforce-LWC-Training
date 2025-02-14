import { createElement } from 'lwc';
import MessangerA from 'c/messangerA';

describe('c-messanger-a', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('should update input field and click button', async () => {
        const element = createElement('c-messanger-a', {
            is: MessangerA
        });

        document.body.appendChild(element);

        await Promise.resolve();

        const inputElement = element.shadowRoot.querySelector('lightning-input');
        expect(inputElement).not.toBeNull();
        
        inputElement.value = 'Hello from A!';
        inputElement.dispatchEvent(new Event('input'));

        await Promise.resolve();

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });
});