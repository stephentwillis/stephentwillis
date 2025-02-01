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

    public getData = (): Observable<Array<IEducation>> => {
        const url = config.Endpoints.filter(x => x.Name === 'github')[0].Url;
        const secret = `ghp_${config.Endpoints.filter(x => x.Name === 'github')[0].Secret}`;

        return this.httpClient
          .get<Array<IEducation>>(
              url.replace('{REPO}', 'data').replace('{URL}', 'personal/education.json?ref=main'),
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
