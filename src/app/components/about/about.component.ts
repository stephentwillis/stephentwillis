import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

import { IEducation } from 'src/app/model/IEducation';

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public collection: Array<IEducation> = [];

    constructor(private service: EducationService) {
        this.getData();
    }

    private getData = (): void => {
        this.service.getData()
            .subscribe((data: Array<IEducation>) => this.collection = [ ...data ]);
    }
}
