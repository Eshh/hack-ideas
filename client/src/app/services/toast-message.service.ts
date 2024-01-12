import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  public showToastMsg: BehaviorSubject<any> = new BehaviorSubject({state:false,message:'',color:''});

  setToastMsgFunction(data:any) {
    this.showToastMsg.next(data);
    setTimeout(() => this.showToastMsg.next({state:false,message:'',color:''}), 3000);
  }
}
