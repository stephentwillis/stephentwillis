import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/*import career from '../../data/career';*/
import { ICompany, IRole } from 'src/app/model/ICareer';

@Component({
  selector: 'sw-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  constructor(private sanitizer: DomSanitizer) {}

  private _career: Array<ICompany> = [];
  private _company: string = "";
  private _jobTitle: string = "";

  @Input() set career(value: Array<ICompany>) {
    this._career = value;
  }

  @Input() set company(value: string) {
    this._company = value;
  }

  @Input() set jobTitle(value: string) {
    this._jobTitle = value;
  }

  get roles(): Array<IRole> {
    return this._career
      .filter((c: ICompany) => c.Name === this._company)[0]
      .Roles;
  }

  get from(): string {
    return this._career
      .filter((c: ICompany) => c.Name === this._company)[0]
      .Roles
      .filter((r: IRole) => r.JobTitle === this._jobTitle)[0]
      .From;
  }

  get to(): string {
    return this._career
      .filter((c: ICompany) => c.Name === this._company)[0]
      .Roles
      .filter((r: IRole) => r.JobTitle === this._jobTitle)[0]
      .To;
  }

  get logo(): string {
    return this._career
      .filter((c: ICompany) => c.Name === this._company)[0]
      .Logo;
  }

  get company(): string {
    return this._company;
  }

  get jobTitle(): string {
    return this._jobTitle;
  }

  get description(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
        this._career
          .filter((c: ICompany) => c.Name === this._company)[0]
          .Roles
          .filter((r: IRole) => r.JobTitle === this._jobTitle)[0]
          .Description
        );
  }

  get url(): string {
    return this._career
      .filter((c: ICompany) => c.Name === this._company)[0]
      .Url;
  }
}
