import { Component } from '@angular/core';
import { ICompany } from 'src/app/model/ICareer';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'sw-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
    public career: Array<ICompany>;

    constructor(service: CareerService) {
        this.career = service.getData();
    }
}