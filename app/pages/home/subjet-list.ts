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
// 设置主页12个主题的数据，现为本地模拟
  public list:Sub[] = [
    { id:1,title:'天下美景',subtitle:'|游览世界',pic:'tianxiameijing.png'},
    { id:2,title:'游学夏令营',subtitle:'环球暑期夏令营|',pic:'youxuexialingying.png'},
    { id:3,title:'旅居生活',subtitle:'|远离喧嚣的城市',pic:'lvjvshenghuo.png'},
    { id:4,title:'特色民俗',subtitle:'各民族风情游|',pic:'teseminshu.png'},
    { id:5,title:'异乡伴侣',subtitle:'|旅游玩伴',pic:'yixiangbanlv.png'},
    { id:6,title:'徒步旅行',subtitle:'足行天下|',pic:'tubulvxing.png'},
    { id:7,title:'户外极限',subtitle:'|挑战你的极限',pic:'huwaijixian.png'},
    { id:8,title:'主题酒店',subtitle:'有故事的房间|',pic:'zhutijiudian.png'},
    { id:9,title:'旅行专车',subtitle:'|含当地司机',pic:'lvxingzhuanche.png'},
    { id:10,title:'舌尖美味',subtitle:'各地美味尝个够|',pic:'shejianmeiwei.png'},
    { id:11,title:'特产商城',subtitle:'|足不出户买土产',pic:'teseshangcheng.png'},
    { id:12,title:'旅游管家',subtitle:'专制的旅游管理人员|',pic:'lvyouguanjia.png'},
  ];

  constructor() {

  }

}
