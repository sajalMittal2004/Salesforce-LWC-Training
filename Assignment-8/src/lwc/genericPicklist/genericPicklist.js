import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues  } from "lightning/uiObjectInfoApi";

export default class GenericPicklist extends LightningElement {
    objectApiName;
    fieldApiName;
    recordTypeId = '012000000000000AAA';
    pickListPlaceholder = "Picklist Values:"

    showPicklistValue = false;

    options = [];

    handleGetPicklistValues() {
        this.showPicklistValue = true;
        const inputs = this.template.querySelectorAll('lightning-input');
        inputs.forEach(input => {
            if(input.name === "object") {
                this.objectApiName = input.value;
            } else if(input.name === "field") {
                this.fieldApiName = input.value;
            }
        })
    }    

    
    @wire(getPicklistValues, { recordTypeId: '$recordTypeId',
                                fieldApiName:  '$fieldName'
    })wiredPicklistValues({data, error}) {
        if(data) {
            this.options = data.values.map(item => ({
                label: item.label,
                value: item.value
            }));
        }
    }

    get fieldName(){
          return  `${this.objectApiName}.${this.fieldApiName}`;
    }
    
}