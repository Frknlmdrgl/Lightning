import { LightningElement } from 'lwc';

export default class HtmlEventsBasic extends LightningElement {
    message='Yusuf Furkan'
    handleChange(event){
      const val = event.target.value;
      const lbl = event.target.label;

      console.log('deger : '+val+'/ etiketi : ',lbl);
    }
}