import { Component ,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { tableGuide } from  './tableguide';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'build/pages/about/about.html',
  directives:[tableGuide],

})
export class AboutPage {
  @Input() inputd:any;
  // private http:Http;
  private httpdata:any;
  constructor(public navCtrl: NavController, private http:Http) {
    // console.log(this.inputd)
    this.http.get('http://headers.jsontest.com/')
      .map( res => res.json())
      .subscribe( result => {this.httpdata =  result},
        Error => {
          console.error('onError');
        }, () => {
          console.log('onComplete');
          console.log(this.httpdata);
        })

  ;

  }
}

