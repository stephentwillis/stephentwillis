import { Injectable } from '@angular/core';
import { ICompany } from '../model/ICareer';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
    constructor() { }

    public getData = (): Array<ICompany> => {
      fetch("", {})
          .then((res: Response) => {

          })
          .catch((err: Error) => {

          });
      
        // Needs implementing
        return new Array<ICompany>;
    }
}
