import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEducation } from '../model/IEducation';

import config from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
    constructor(private httpClient: HttpClient) { }

    public getData = (): Array<IEducation> => {
        const url = config.endpoints.filter(x => x.name === 'github')[0].url;
        const secret = config.endpoints.filter(x => x.name === 'github')[0].secret;

        this.httpClient.get<Array<IEducation>>(url, {}).subscribe();

        // Needs implementing
        return new Array<IEducation>;
    }
}
