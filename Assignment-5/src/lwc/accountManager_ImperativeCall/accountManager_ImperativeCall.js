import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManagerController.getAccounts';

export default class AccountManager_ImperativeCall extends LightningElement {
    data;
    columns = [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Industry', fieldName: 'Industry'},
        {label: 'Domain__c', fieldName: 'Domain__c'},
        {label: 'Phone', fieldName: 'Phone'}
    ];

    connectedCallback() {
        getAccounts()
        .then(result => {
            this.data = result
        })
        .catch(error => {
            this.data = undefined
        })
    }

}