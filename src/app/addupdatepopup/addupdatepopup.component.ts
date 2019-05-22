import { Component, OnInit } from '@angular/core';
import { SenddataService } from '../senddata.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-addupdatepopup',
  templateUrl: './addupdatepopup.component.html',
  styleUrls: ['./addupdatepopup.component.css']
})
export class AddupdatepopupComponent implements OnInit {

  constructor(private service:SenddataService, private _router:Router) { 
    this.service=service;
  }
TransferData(name,age,num,mail){
  this.service.recievedata(name,age,num,mail);
  this._router.navigate(['/view']);
}
  ngOnInit() {
  }

}

