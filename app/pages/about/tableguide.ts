/**
 * Created by Administrator on 2016/10/5.
 */
import {Component} from '@angular/core';
import  {Catalog} from './catalog';
import {NgStyle} from '@angular/common';

@Component({
  templateUrl:'build/pages/about/tableguide.html',
  selector:'table-guide',
  directives:[NgStyle]

})
export class tableGuide{
  private cell_width:number;
  private items:Catalog[] = [];
  initlist() {
    this.items.push({name : "跟团游 ", img :"my-icon1.png"})
    this.items.push({name : "周边游", img :"my-icon6.png"})
    this.items.push({name : "自助游", img :"my-icon5.png"})
    this.items.push({name : "游轮", img :"my-icon4.png"})
    this.items.push({name : "门票", img :"my-icon1.png"})
    this.items.push({name : "自驾游", img :"my-icon6.png"})
    this.items.push({name : "当地玩乐", img :"my-icon2.png"})
    this.items.push({name : "机票", img :"my-icon5.png"})
    this.items.push({name : "火车票", img :"my-icon1.png"})
    this.items.push({name : "签证", img :"my-icon4.png"})
  }
  constructor() {
    let current_width = window.innerWidth;
    this.cell_width= current_width/3 ;
    console.log(this.cell_width);
    this.initlist();
  }



}
