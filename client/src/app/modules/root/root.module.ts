import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHacksComponent } from './list-hacks/list-hacks.component';
import { AddHackComponent } from './add-hack/add-hack.component';



@NgModule({
  declarations: [
    ListHacksComponent,
    AddHackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RootModule { }
