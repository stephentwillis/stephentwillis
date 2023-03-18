import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import strings from '../../strings';

@Component({
  selector: 'sw-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    private captchaResponse: string | null = null;
  
    public isFormValid: boolean = false;
    public isCaptchaValid: boolean = this.captchaResponse !== "null" && this.captchaResponse !== null;
    public isSent: boolean = false;
    public message: string = "";

    public sendEmail = (form: {}): void => {
        if (this.isFormValid) {            
            if (this.isCaptchaValid) {
            /*emailjs.send('donotreply', 'donotreply_basic', form, 'hTFKs5h8Xkg4XwjMu')
                .then((res: EmailJSResponseStatus): void => {
                    this.message = strings.ContactSuccess;
                    this.isSent = true;
                })
                .catch((err: EmailJSResponseStatus):void => {
                    this.message = strings.ContactFailure;
                });*/

                this.message = strings.ContactSuccess;
                this.isSent = true;
            } else {
                this.message = strings.ContactCompleteCaptcha;
            }
        } else {
            this.message = strings.ContactCompleteForm;
        }
    }

    public resolved(captchaResponse: string) {
        console.info(`Captcha response: ${captchaResponse}`);
        this.captchaResponse = captchaResponse;
    }
}
