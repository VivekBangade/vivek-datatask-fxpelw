import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
myName;
myage;
mynumber;
mymail;

  constructor(private service:SenddataService, private _router:Router) { 
    this.myName=service.dataTransfer();
    this.myage=service.dataTransfer();
    this.mynumber=service.dataTransfer();
    this.mymail=service.dataTransfer();
  }
gotohome(){
   this._router.navigate(['/home']);
}
  ngOnInit() {
  }

}