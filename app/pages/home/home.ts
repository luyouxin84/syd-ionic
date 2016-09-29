import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { headBar } from './headbar';
import { mainTable } from './main-table-6';




@Component({
  templateUrl: 'build/pages/home/home.html',
  directives : [headBar,mainTable]
})
export class HomePage {
  constructor(public navCtrl: NavController,public navparams:NavParams) {

  }
}
