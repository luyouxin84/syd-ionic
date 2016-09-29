import { Component ,Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  @Input() inputd:any
  constructor(public navCtrl: NavController) {
    // console.log(this.inputd)
  }
}
