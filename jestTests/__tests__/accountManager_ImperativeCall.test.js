import { createElement } from 'lwc';
import AccountManager_ImperativeCall from 'c/accountManager_ImperativeCall';

describe('c-account-manager-imperative-call', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders lightning-datatable', () => {
        const element = createElement('c-accountManager_ImperativeCall', {
            is: AccountManager_ImperativeCall
        });

        document.body.appendChild(element);

        const table = element.shadowRoot.querySelector('lightning-datatable');
        expect(table).not.toBeNull();
    });
});