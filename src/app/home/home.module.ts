import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CodeTidbitsComponent } from './components/code-tidbits/code-tidbits.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';



@NgModule({
  declarations: [
    HomeComponent,
    CodeTidbitsComponent,
    NavbarComponent,
    HomeInfoComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
