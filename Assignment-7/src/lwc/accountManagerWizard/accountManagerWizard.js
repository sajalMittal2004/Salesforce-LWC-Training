import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getContacts from '@salesforce/apex/AccountManagerWizardController.getContacts';
import getContactCount from '@salesforce/apex/AccountManagerWizardController.getContactCount';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_FIELD from '@salesforce/schema/Account.OwnerId';
import NO_OF_CONTACTS_FIELD from '@salesforce/schema/Account.Number_Of_Contacts__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Account.Description';

export default class AccountManagerWizard extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api accName;   

    contactCount;
    wiredContactsResult;
    wiredContactCountResult;

    name = NAME_FIELD;
    ownerName = OWNER_FIELD;
    noOfContacts = NO_OF_CONTACTS_FIELD;
    description = DESCRIPTION_FIELD;

    showAccountDetails = false;
    createContact = false;
    searchKey = '';
    data;
    columns = [
        {label: 'Name', fieldName: 'Name'},
        {label: 'Phone', fieldName: 'Phone'},
        {label: 'Email', fieldName: 'Email'},
        {label: 'Account Name', fieldName: 'AccountName'}
    ]

    @wire(getContacts, {
        accId: '$recordId',
        searchKey: '$searchKey'
    })
    wiredContacts(result) {
        this.wiredContactsResult = result; 
        const { data, error } = result;
        if (data) {
            this.data = data.map(contact => ({
                ...contact,
                AccountName: contact.Account ? contact.Account.Name : ''
            }));
            this.accName = this.data[0]?.AccountName || '';
        } else {
            this.data = undefined;
        }
    }

    @wire(getContactCount, {accId: '$recordId'})
    wiredContactCount(result) {
        this.wiredContactCountResult = result;
        const { data, error } = result
        if(data) {
            this.contactCount = data;
        } else if(error) {
            this.contactCount = 0;
        }
    };

    handleShowAccount() {
        this.showAccountDetails = true;
    }

    handleChange(event) {
        this.searchKey = event.target.value;
    }

    handleCreateContact(event) {
        this.createContact = true;
        this.showAccountDetails = false;
    }

    handleCloseWizard() {
        this.showAccountDetails = false;
    }

    handleCloseForm(event) {
        this.createContact = event.detail.isVisible;
        this.showAccountDetails = true;
    }

    handleContactCreated(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success",
                message: "Contact Created Successfully",
                variant: "success",
            }),
        );  
        refreshApex(this.wiredContactsResult);
        refreshApex(this.wiredContactCountResult);
        this.createContact = false;
    }
}