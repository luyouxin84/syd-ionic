/**
 * Created by Administrator on 2016/10/5.
 */
import {Component} from '@angular/core';
import  {Catalog} from './catalog';

@Component({
  templateUrl:'build/pages/about/tableguide.html',
  selector:'table-guide',

})
export class tableGuide{
  private cell_width:number;
  private items:Catalog[] = [];
  initlist() {
    this.items.push({name : "12313", img :"my-icon1.png"})
  }
  constructor() {
    let current_width = window.innerWidth;
    this.cell_width= current_width/3 ;
    console.log(this.cell_width);
    this.initlist();
  }



}
