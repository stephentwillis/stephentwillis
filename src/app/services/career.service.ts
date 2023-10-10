import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICompany } from '../model/ICareer';

import config from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  constructor(private httpClient: HttpClient) { }

  public getData = (): Observable<Array<ICompany>> => {
      const url = config.endpoints.filter(x => x.name === 'github')[0].url;
      const secret = `ghp_${config.endpoints.filter(x => x.name === 'github')[0].secret}`;

      return this.httpClient
          .get<Array<ICompany>>(
              url.replace('{REPO}', 'data').replace('{URL}', 'personal/career.json?ref=main'),
              {
                  headers: {
                      'Accept': 'application/vnd.github.VERSION.raw'
                  },
                  observe: 'body',
                  responseType: 'json'
              }
          );
  }
}
