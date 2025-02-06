import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManagerController.getAccounts';

export default class AccountManagerFetch extends LightningElement {
    data;
    columns = [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Industry', fieldName: 'Industry'},
        {label: 'Domain__c', fieldName: 'Domain__c'},
        {label: 'Phone', fieldName: 'Phone'}
    ];
    @wire(getAccounts)
    wiredAccounts({data, errror}) {
        if(data) {
            this.data = data;
        }else {
            this.data = undefined;
        }
    }
}