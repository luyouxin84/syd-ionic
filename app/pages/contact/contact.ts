import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController,public nav:NavParams) {
    let id = nav.get('id');
    let name = nav.get('name');
    console.log(id,name)
  }
}
