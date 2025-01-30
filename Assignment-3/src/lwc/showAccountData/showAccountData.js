import { LightningElement, api } from 'lwc';

export default class CreateContact extends LightningElement {

    visible = false;
    @api recordId;
    @api objectApiName;
    fields = ["Name", "Company", "Phone", "Website"];
    
    handleClick(event) {
        this.visible = true;
    }

    handleContactCreated(event) {
        this.visible = event.detail.isVisible;
        
    }
}