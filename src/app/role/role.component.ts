import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import config from './config';

@Component({
  selector: 'sw-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  constructor(private sanitizer: DomSanitizer) {}

  private _from: string = "";
  private _to: string = "";
  private _company: string = "";
  private _jobTitle: string = "";
  private _responsibilities: string = "";

  @Input() set from(value: string) {
    this._from = value;
  }

  get from(): string {
    return this._from;
  }

  @Input() set to(value: string) {
    this._to = value;
  }

  get to(): string {
    return this._to;
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
  
  get responsibilities(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(config.roles.filter((x) => x.name === this._jobTitle)[0].value);
  }
}
