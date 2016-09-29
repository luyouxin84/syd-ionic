/**
 * Created by Administrator on 2016/9/28.
 */
import {Component} from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import  {ContactPage } from '../contact/contact';
@Component({
  templateUrl:'build/pages/home/main-table-6.html',
  selector:'main-table'
})
export class mainTable{

  constructor(public navCtrl: NavController,public navparams:NavParams){

  }
  pushpage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ContactPage, {
      id: "123",
      name: "Carl"
    });
  }
}
