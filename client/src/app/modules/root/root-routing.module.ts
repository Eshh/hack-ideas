import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHacksComponent } from './list-hacks/list-hacks.component';

const routes: Routes = [
  {
    path: 'hacks/:empID',
    component: ListHacksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
