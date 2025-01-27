import { LightningElement } from 'lwc';

export default class ParentGreeting extends LightningElement {
    greetings;

    hadleChange(event) {
        this.greetings = event.target.value;
    }
}