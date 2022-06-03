import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {

    isTom = true;
    isjerry = true;

    showTom(){
      this.isjerry=false;
      this.isTom=true;
    }

    showJerry(){
        this.isjerry=true;
        this.isTom=false;
    }

}