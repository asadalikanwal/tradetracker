import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  getServers(urlLink) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let fetchData = 'https://stormy-retreat-80738.herokuapp.com/getData';

    let url = encodeURIComponent(urlLink);

    return this.http.post(fetchData,
      "data=" + url, { headers : headers })
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
