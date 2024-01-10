import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getItem(key: any): any {
    return window.localStorage.getItem(key);
  }

  public setItem(key: any, value: any) {
    window.localStorage.setItem(key, value);
  }
}
