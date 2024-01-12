import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  public static API_BASE_URL = 'http://13.127.103.115:8000/v1/ideas';
}
