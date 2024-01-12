import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  empID: string | number = '';

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.empID || String(this.empID).length < 3) {
      this.toastService.setToastMsgFunction({
        status: true,
        message: 'ID should be minimum 3 characters',
        color: '#e9465e',
      });
    } else {
      this.localStorage.setItem('isLoggedIn', true);
      this.localStorage.setItem('empID', this.empID);
      this.router.navigate([`list/hacks/all`]);
    }
  }
}
