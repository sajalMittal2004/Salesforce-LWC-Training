import { createElement } from 'lwc';
import childGreeting from 'c/childGreeting';

describe('c-child-greeting', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test('renders greeting properly', () => {
    const element = createElement('c-child-greeting', {
      is: childGreeting
    });
    document.body.appendChild(element);

    element.greeting = 'Hello from Parent';

    return Promise.resolve().then(() => {
      const pTag = element.shadowRoot.querySelector('p');
      expect(pTag.textContent).toBe('Hello from Parent');
    });
  });
});