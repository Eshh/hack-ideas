import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LocalStorageService } from './services/local-storage.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./modules/root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('out');
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['empID']) {
        console.log('nnnn');
        this.localStorage.setItem('empID', params.empID);
        this.router.navigate([`list/hacks/${params['empID']}`]);
      }
    });
    if (!this.localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['login']);
    }
  }
}
