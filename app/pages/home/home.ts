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
  public list:Sub[] = [
    { id:1,title:'天下美景',subtitil:'|游览世界',pic:'tianxiameijing.png'},
    { id:2,title:'游学夏令营',subtitil:'|环球暑期夏令营',pic:'youxuexialingying.png'}
  ];
  constructor(public navCtrl: NavController,public navparams:NavParams) {
    console.log(this.list);
  }
}
