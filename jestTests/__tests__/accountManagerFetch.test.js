import { createElement } from 'lwc';
import AccountManagerFetch from 'c/accountManagerFetch';

describe('c-account-manager-fetch', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    it('renders lightning-datatable', () => {
        const element = createElement('c-accountManagerFetch', {
            is: AccountManagerFetch
        });
        document.body.appendChild(element);

        const table = element.shadowRoot.querySelector('lightning-datatable');
        expect(table).not.toBeNull();
    });
});