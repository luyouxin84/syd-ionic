import { Component ,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { tableGuide } from  './tableguide';

@Component({
  templateUrl: 'build/pages/about/about.html',
  directives:[tableGuide]
})
export class AboutPage {
  @Input() inputd:any
  constructor(public navCtrl: NavController) {
    // console.log(this.inputd)
  }
}

