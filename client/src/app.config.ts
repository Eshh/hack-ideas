import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  public static API_BASE_URL = 'http://localhost:8000/v1/ideas';
}
