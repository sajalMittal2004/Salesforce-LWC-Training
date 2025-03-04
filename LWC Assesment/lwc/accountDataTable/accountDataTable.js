import { LightningElement, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataTableController.getAccounts';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountDataTable extends LightningElement {
    @api accName;
    @api accId;

    wiredAccountsResult;
    data; 
    createAccount = false;
    createContact = false;

    columns = [
        {label: 'Name', fieldName: 'Name'},
        {label: 'Phone ', fieldName: 'Phone', type: 'phone'},
        {label: 'Website', fieldName: 'Website', type:'url'},
        {label: 'Industry', fieldName: 'Industry'}
    ]

    @wire(getAccounts)
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        console.log('this.wiredAccountsResult: ',this.wiredAccountsResult);
        const {data, error} = result;

        if(data) {
            this.data = data;
            console.log('this.data: ',this.data);
        } else {
            this.data = undefined;
        }
    }

    handleCreateAccount() {
        this.createAccount = true;
    }

    handleCloseWizard() {
        this.createAccount = false;
    }

    handleSuccess(event) {
        this.accId = event.detail.id;
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success",
                message: "Account Created Successfully",
                variant: "success",
            }),
        );
        refreshApex(this.wiredAccountsResult);
        this.createContact = true;
        this.createAccount = false;
        //console.log('this.createContact: ',this.createContact);
    }

    handleCloseForm(event) {
        this.createContact = event.detail.isVisible;
        this.createAccount = true;
    }

    handleContactCreated(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success",
                message: "Contact Created Successfully",
                variant: "success",
            }),
        );
        this.createContact = false;
    }

    handlechange(event) {
        this.accName = event.target.value; 
    }
}