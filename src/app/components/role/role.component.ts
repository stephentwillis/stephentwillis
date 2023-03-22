import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import career from '../../data/career';
import { ICompany, IRole } from 'src/app/model/ICareer';

@Component({
  selector: 'sw-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  constructor(private sanitizer: DomSanitizer) {}

  private _company: string = "";
  private _jobTitle: string = "";

  get from(): string {
    return career.filter((c: ICompany) => c.name === this._company)[0].roles.filter((r: IRole) => r.jobTitle === this._jobTitle)[0].from;
  }

  get to(): string {
    return career.filter((c: ICompany) => c.name === this._company)[0].roles.filter((r: IRole) => r.jobTitle === this._jobTitle)[0].to;
  }

  get logo(): string {
    return career.filter((c: ICompany) => c.name === this._company)[0].logo;
  }

  @Input() set company(value: string) {
    this._company = value;
  }

  get company(): string {
    return this._company;
  }

  @Input() set jobTitle(value: string) {
    this._jobTitle = value;
  }

  get jobTitle(): string {
    return this._jobTitle;
  }
  
  get description(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(career.filter((c: ICompany) => c.name === this._company)[0].roles.filter((r: IRole) => r.jobTitle === this._jobTitle)[0].description);
  }

  get url(): string {
    return career.filter((c: ICompany) => c.name === this._company)[0].url;
  }
}