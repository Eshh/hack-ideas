import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  headers: any = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}
  APIGenericGetMethod(entity: string) {
    let url = entity;
    return this.httpClient.get(url, this.headers).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  APIGenericPostMethod(entity: string, entityObject: {}) {
    let url = entity;
    return this.httpClient.post(url, entityObject).pipe(
      map((response: any) => {
        var data = response;
        var obj: any = {};
        return obj;
      })
    );
  }
}
