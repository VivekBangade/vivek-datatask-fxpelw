import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(private _router:Router) { }

onAddclick(): void{
   this._router.navigate(['/edit']);
}

  ngOnInit() {
  }

}