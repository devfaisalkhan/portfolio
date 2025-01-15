import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true
})
export class ContactComponent {
  contactForm: FormGroup;
  statusMessage: string | null = null;

  constructor(private fb: FormBuilder) {
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
      this.statusMessage = 'Please fill all fields correctly.';
      return;
    }

    const { name, email, message } = this.contactForm.value;

    const requestData = {
      from: email,  
      subject: `Message from portfolio by ${email}`, 
      message: message
    };

    try {
      const response = await fetch('https://mailer-production-5144.up.railway.app/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        this.statusMessage = 'Your message has been sent successfully!';
        this.contactForm.reset();
      } else {
        this.statusMessage = 'Failed to send message, please try again later.';
        this.contactForm.reset();
      }
    } catch (error) {
      this.statusMessage = 'Error sending message. Please try again.';
      console.error('Error:', error);
    }

    // this.clearStatusMessage(); 
  }

  clearStatusMessage() {
    setTimeout(() => {
      this.statusMessage = null;
    }, 3000); // Remove the message after 3 seconds
  }
}
