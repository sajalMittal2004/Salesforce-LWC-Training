import { createElement } from 'lwc';
import ParentGreeting from 'c/parentGreeting';

describe('c-parent-greeting', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders child component and updates greeting on input change', () => {
        const element = createElement('c-parent-greeting', {
            is: ParentGreeting
        });
        document.body.appendChild(element);

        const heading = element.shadowRoot.querySelector('h2');
        expect(heading.textContent).toBe('Hello World!');

        const childComp = element.shadowRoot.querySelector('c-child-greeting');
        expect(childComp).not.toBeNull();

        const inputEl = element.shadowRoot.querySelector('lightning-input');
        inputEl.value = 'Test Greeting';
        inputEl.dispatchEvent(new Event('change'));

        return Promise.resolve().then(() => {
            expect(childComp.greeting).toBe('Test Greeting');
        });
    });
});
