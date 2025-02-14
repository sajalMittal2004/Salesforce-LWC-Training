import { createElement } from 'lwc';
import AccountManager from 'c/accountManager';

describe('c-account-manager', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('renders lightning-datatable with correct data', () => {
        const element = createElement('c-account-manager', {
            is: AccountManager
        });

        document.body.appendChild(element);

        const table = element.shadowRoot.querySelector('lightning-datatable');
        expect(table).not.toBeNull();
        expect(table.data.length).toBe(3);
        expect(table.data[0]).toEqual({ id: '1', name: 'Account 1', industry: 'Manufacturing' });
    });
});