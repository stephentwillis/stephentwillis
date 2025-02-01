import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICompany } from 'src/app/model/ICareer';


@Component({
  selector: 'sw-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
    public Company: ICompany = {
      CombineRoles: false,
      Description: "",
      Logo: "",
      Name: "",
      Overview: "",
      Roles: [],
      Url: ""
    };

    constructor(private sanitizer: DomSanitizer) { }

    @Input() set company(value: ICompany) {
      this.Company = value;
    }

    get overview(): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(
          this.Company.Overview
        );
    }

    get description(): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(
          this.Company.Description
        );
    }
}
