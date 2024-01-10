import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHacksComponent } from './list-hacks/list-hacks.component';
import { AddHackComponent } from './add-hack/add-hack.component';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
  declarations: [ListHacksComponent, AddHackComponent],
  imports: [CommonModule, RootRoutingModule],
})
export class RootModule {}
