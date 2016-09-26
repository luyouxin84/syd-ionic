import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { headBar } from './headbar';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives : [headBar]
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  
  }
}
