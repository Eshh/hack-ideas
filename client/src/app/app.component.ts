import { Component } from '@angular/core';
import { ToastMessageService } from './services/toast-message.service';

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
  constructor(private toastService: ToastMessageService) {
    this.toastService.showToastMsg.subscribe((data) => (this.toastData = data));
  }
}
