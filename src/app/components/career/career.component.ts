import { Component } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { ICompany } from 'src/app/model/ICareer';

@Component({
  selector: 'sw-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
    public Career: Array<ICompany> = [];

    constructor(private service: CareerService) {
      this.GetData();
    }

    private GetData = (): void => {
      this.service
        .getData()
        .subscribe((data: Array<ICompany>) => this.Career = [ ...data ]);
    }
}
