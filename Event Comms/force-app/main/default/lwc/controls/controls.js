import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0,2,3,4,5,6];
    handleAdd() {
        console.log('handleAdd() invoked in controls.js...');
        this.dispatchEvent(new CustomEvent('add'));
    }
    handleSubtract() {
        console.log('handleSubtract() invoked in controls.js...');
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event) {
        console.log('handleMultiply() invoked in controls.js...');
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: factor
        }));
    }
}