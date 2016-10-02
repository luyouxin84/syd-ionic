import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { headBar } from './headbar';
import { mainTable } from './main-table-6';
import { subjetList } from './subjet-list';
import  {Sub} from './sub';



@Component({
  templateUrl: 'build/pages/home/home.html',
  directives : [headBar,mainTable,subjetList]
})
export class HomePage {
  //noinspection TypeScriptValidateTypes

  constructor(public navCtrl: NavController,public navparams:NavParams) {
    // console.log(this.list);
  }
}
