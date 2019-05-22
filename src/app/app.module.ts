import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { GridviewComponent } from './gridview/gridview.component';
import { AddupdatepopupComponent } from './addupdatepopup/addupdatepopup.component';
import { HomeComponent } from './home/home.component';
import { SenddataService } from './senddata.service';

const appRoutes: Routes=[
  { path:'home', component:HomeComponent},
  { path:'edit', component:AddupdatepopupComponent},
  { path:'add', component:TopmenuComponent},
  { path:'view', component:GridviewComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', component:HomeComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, TopmenuComponent, GridviewComponent, AddupdatepopupComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SenddataService]
})
export class AppModule { }
