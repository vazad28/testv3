import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string = 'Vikrant';
  constructor(public navCtrl: NavController) {

  }

  goToNextPage() {
    this.navCtrl.push('Page1',{
      param1: 'param1'
    });
  }


}
