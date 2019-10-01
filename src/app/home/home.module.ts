import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CodeTidbitsComponent } from './components/code-tidbits/code-tidbits.component';



@NgModule({
  declarations: [
    HomeComponent,
    CodeTidbitsComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
