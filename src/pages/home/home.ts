import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Mode } from './../../app/app.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    console.log(Mode.mode);
  }
}
