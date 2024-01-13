import { Component } from '@angular/core';
import { ToastMessageService } from './services/toast-message.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toastData: any = {
    state: false,
    message: '',
    color: '',
  };
  showSpinner: boolean = false;
  constructor(
    private toastService: ToastMessageService,
    private spinnerService: SpinnerService
  ) {
    this.toastService.showToastMsg.subscribe((data) => (this.toastData = data));
    this.spinnerService.showSpinner.subscribe(
      (data) => (this.showSpinner = data)
    );
  }
}
