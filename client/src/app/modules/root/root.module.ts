import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHacksComponent } from './list-hacks/list-hacks.component';
import { AddHackComponent } from './add-hack/add-hack.component';
import { RootRoutingModule } from './root-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewMorePopupComponent } from './view-more-popup/view-more-popup.component';

@NgModule({
  declarations: [ListHacksComponent, AddHackComponent, ViewMorePopupComponent],
  imports: [CommonModule, RootRoutingModule, FormsModule, ReactiveFormsModule],
})
export class RootModule {}
