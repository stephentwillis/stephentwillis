import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import strings from '../../strings';

@Component({
  selector: 'sw-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public message: string = "";


    public sendEmail = (form: {}): void => {
        emailjs.send('donotreply', 'donotreply_basic', form, 'hTFKs5h8Xkg4XwjMu')
          .then((res: EmailJSResponseStatus): void => {
              this.message = strings.ContactSuccess;
          })
          .catch((err: EmailJSResponseStatus):void => {
            this.message = strings.ContactFailure;
          });
    }
}
