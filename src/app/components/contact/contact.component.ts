import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import strings from '../../../strings';

@Component({
  selector: 'sw-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    private captchaResponse: string | null = null;
  
    public isFormValid: boolean = false;    
    public isSent: boolean = false;
    public message: string = "";

    get isCaptchaValid(): boolean {
        return this.captchaResponse !== "null" && this.captchaResponse !== null;
    }

    public sendEmail = (form: NgForm): void => {
        if (form.valid) {            
            if (this.isCaptchaValid) {
                if (window.location.hostname !== "localhost") {
                    emailjs.send('donotreply', 'donotreply_basic', form.value, 'hTFKs5h8Xkg4XwjMu')
                        .then((res: EmailJSResponseStatus): void => {
                            this.message = strings.ContactSuccess;
                            this.isSent = true;
                        })
                        .catch((err: EmailJSResponseStatus):void => {
                            this.message = strings.ContactFailure;
                        });
                } else {
                    console.info('Email Sent!');
                }

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
        //console.info(`Captcha response: ${captchaResponse}`);
        this.captchaResponse = captchaResponse;
    }
}
