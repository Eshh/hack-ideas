import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public showSpinner: BehaviorSubject<any> = new BehaviorSubject(false);

  showSpinnerMethod() {
    this.showSpinner.next(true);
  }
  hideSpinner() {
    this.showSpinner.next(false);
  }
}
