import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  contactForm: FormGroup;
  statusMessage: boolean | null = null;
  statusMessageType = '';

  constructor(private fb: FormBuilder, private helperSvc: HelperService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });

  }
 

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  async sendEmail(event: Event) {
    event.preventDefault();
    if (this.contactForm.invalid) {
      return;
    }

    const { name, email, message } = this.contactForm.value;

    const requestData = {
      from: email,  
      subject: `Message from portfolio by ${email}`, 
      message: message
    };

    this.helperSvc.presentLoader('Sending mail'); 
    try {

      const response = await fetch('https://mailer-production-5144.up.railway.app/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();

      if (response.ok) {
        this.helperSvc.presentAlert(data.message, 'success')
      }
    } catch (error: any) {
      this.helperSvc.presentAlert(error, 'error');
    } finally {
      this.helperSvc.dismissLoader();
    }
  }

  clearStatusMessage() {
    setTimeout(() => {
      this.statusMessage = null;
    }, 3000); // Remove the message after 3 seconds
  }
}
