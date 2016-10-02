/**
 * Created by 卢友新 on 2016/9/29.
 */
import {Component} from '@angular/core';
import {Sub} from './sub';

@Component({
  templateUrl:'build/pages/home/sublist.html',
  selector:'sub-list'
})
export class subjetList{
  //noinspection TypeScriptValidateTypes

  public list:Sub[] = [
    { id:1,title:'天下美景',subtitle:'|游览世界',pic:'tianxiameijing.png'},
    { id:2,title:'游学夏令营',subtitle:'|环球暑期夏令营',pic:'youxuexialingying.png'}
  ];
  constructor(){

  }
}
