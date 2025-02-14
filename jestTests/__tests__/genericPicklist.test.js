import { createElement } from 'lwc';
import GenericPicklist from 'c/genericPicklist';

describe('c-generic-picklist', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    
    it('renders the input fields and button', () => {
        const element = createElement('c-generic-picklist', {
            is: GenericPicklist
        });
    
        document.body.appendChild(element);
    
        const inputs = element.shadowRoot.querySelectorAll('lightning-input');
        expect(inputs.length).toBe(2);
    
        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull(); 
    });

    it('shows picklist when button is clicked', () => {
        const element = createElement('c-generic-picklist', {
            is: GenericPicklist
        });
    
        document.body.appendChild(element);
    
        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        return Promise.resolve().then(() => {
            const combobox = element.shadowRoot.querySelector('lightning-combobox');
            expect(combobox).not.toBeNull();
        });
         
    });
});