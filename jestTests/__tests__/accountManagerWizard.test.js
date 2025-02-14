import { createElement } from 'lwc';
import AccountManagerWizard from 'c/accountManagerWizard';

describe('c-account-manager-wizard', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders Account Manager Wizard button', () => {
        const element = createElement('c-account-manager-wizard', {
            is: AccountManagerWizard
        });

        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
        expect(button.label).toBe('Account Manager Wizard');

    });

    it('displays account details modal when button is clicked', async () => {
        const element = createElement('c-accountManagerWizard', {
            is: AccountManagerWizard
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();
        await Promise.resolve();

        const modal = element.shadowRoot.querySelector('.slds-modal');
        expect(modal).not.toBeNull();
    });
});