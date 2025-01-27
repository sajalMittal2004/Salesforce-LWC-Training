import { LightningElement, api } from 'lwc';

export default class ChildGreeting extends LightningElement {
    @api greeting;
}