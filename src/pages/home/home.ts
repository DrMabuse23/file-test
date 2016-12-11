import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Mode } from './../../app/app.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mode: string;
  constructor(public navCtrl: NavController) {
    this.mode = Mode.mode['error'] || Mode.mode['value'];
    console.log(Mode.mode);
  }
}
