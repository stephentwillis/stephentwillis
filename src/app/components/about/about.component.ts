import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

import { IEducation } from 'src/app/model/IEducation';
import Education from 'src/app/data/education';

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public collection: Array<IEducation>;

    constructor(service: EducationService) {
        this.collection = service.getData();
    }
}