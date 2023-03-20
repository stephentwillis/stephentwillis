import { Component } from '@angular/core';

import { IEducation } from 'src/model/IEducation';
import Education from 'src/data/education';

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public collection: Array<IEducation> = Education;
}
