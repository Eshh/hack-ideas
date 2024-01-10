import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  empID: string | number = '';

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.empID || String(this.empID).length < 3) {
      alert('ID should be minimum 3 characters');
    } else {
      this.localStorage.setItem('isLoggedIn', true);
      this.localStorage.setItem('empID', this.empID);
      this.router.navigate([`list/hacks/all`]);
    }
  }
}
