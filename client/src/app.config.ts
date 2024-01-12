import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  public static API_BASE_URL = 'https://hack-ideas-server.onrender.com/v1/ideas';
}
