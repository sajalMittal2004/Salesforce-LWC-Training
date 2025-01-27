import { LightningElement } from 'lwc';

export default class AccountManager extends LightningElement {
    columns = [
        {label: 'Account Name', fieldName: 'name'},
        {label: 'Industry', fieldName: 'industry'},
    ];

    accounts = [
        {id:'1', name: 'Account 1', industry: 'Manufacturing'},
        {id:'2', name: 'Account 2', industry: 'Technology'},
        {id:'3', name: 'Account 3', industry: 'Retail'},
    ];
}