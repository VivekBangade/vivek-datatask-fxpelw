import { Injectable,EventEmitter } from '@angular/core';

// export interface myData {
//    name:string;
//    age:number;
//    mail:string;
//    num:number;
// }

@Injectable()
export class SenddataService {
  name:string;
  age:number;
   num:number;
   mail:string;
// sharingData: myData={ age, num, mail, name };
  constructor() { }

recievedata(name1,age1,num1,mail1){
this.name=name1;
this.age=age1;
this.num=num1;
this.mail=mail1;
}

  dataTransfer(){
    var data="{"+"\"name\":"+"\""+this.name+"\""+","+"\"age\":"+"\""+this.age+"\""+","+"\"num\":"+"\""+this.num+"\""+","+"\"mail\":"+"\""+this.mail+"\""+"}";
    //data=JSON.stringify(data);
    //console.log("data is"+data)
    
    // return data;
    //  return this.name;
    // return this.age
    // return this.num;
    // return this.mail;
  }
}