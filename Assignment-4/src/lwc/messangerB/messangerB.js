import { LightningElement, wire } from 'lwc';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import TRANSFER_MESSAGE_CHANNEL from '@salesforce/messageChannel/transferMessage__c';

export default class MessangerB extends LightningElement {
    inputMessage = '';
    messageToShown = '';

    subscription = null;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        if(!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                TRANSFER_MESSAGE_CHANNEL,
                (message) => this.handleMessage(message)
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    handleMessage(message) {
        this.messageToShown = message.msgAtoB;
    }

    handleChange(event) {
        this.inputMessage = event.target.value;
    }

    handleClick(event) {
        const payLoad = {
            msgBtoA : this.inputMessage
        };
        publish(this.messageContext, TRANSFER_MESSAGE_CHANNEL, payLoad);
    }
}