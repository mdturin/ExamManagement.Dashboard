import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getHttpData(url:any, fieldValues:any) {
    return fetch(url, {
      method: 'GET',
      body: JSON.stringify(fieldValues),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data)
    .catch(err => err);
  }

  postHttpData(url:any, fieldValues: any) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(fieldValues),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => data)
    .catch(err => err);
  }
}
