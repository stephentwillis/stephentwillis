import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IEducation } from '../model/IEducation';

import config from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
    constructor(private httpClient: HttpClient) { }

    public getData = (): Observable<any> => {
        const url = config.endpoints.filter(x => x.name === 'github')[0].url;
        const secret = `ghp_${config.endpoints.filter(x => x.name === 'github')[0].secret}`;

        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Accept', 'application/vnd.github.VERSION.raw');

        return this.httpClient
          .get<any>(
              url.replace('{REPO}', 'data').replace('{URL}', 'personal/education.json?ref=main'),
              { 
                  headers: headers,
                  observe: 'body',
                  responseType: 'json'
              }
          );
    }
}
