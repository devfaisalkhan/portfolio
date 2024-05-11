import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  encapsulation: ViewEncapsulation.None,
  template: `
<section id="contact" class="section ">
  <div class="container">
    <form (ngSubmit)="onFormSubmiited()">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h2 class="section-title">Get in Touch</h2>
            <p class="section-subtitle">Feel free to drop me a message if you have any questions or project inquiries.</p>
          </div>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="name" placeholder="Your Name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" class="form-control" id="email" placeholder="Your Email">
                </div>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="subject" placeholder="Subject">
            </div>
            <div class="form-group">
              <textarea class="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </form>
  </div>
</section>

  `,
  styles: `
  app-contact{
    .section{
      z-index: 99;
      position: relative;

    }
    ::-webkit-scrollbar {
              display: none;
          }
          /* For Firefox */
          scrollbar-width: none;
          /* For Internet Explorer and Edge */
          -ms-overflow-style: none;
          /* For Firefox */
          overflow: -moz-scrollbars-none;
    #contact {
  padding: 80px 0;
}

.section-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
}

.form-control {
  padding: 18px 25px;
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: linear-gradient(to right, #a855f7, #06b6d4) !important;
  -webkit-background-clip: text;
  background-clip: text !important;
  color: transparent !important;
}

textarea.form-control {
  resize: none;
}

.btn-primary {

  padding: 15px;
  font-size: 18px;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: linear-gradient(to right, #a855f7, #06b6d4) !important;
  -webkit-background-clip: text;
  background-clip: text !important;
  color: transparent !important;
}

.btn-primary:hover {
  background-color: #45a049;
  border-color: #45a049;
}

  }
    
  `
})
export class ContactComponent {

  onFormSubmiited(){
    console.log('hello');
    
  }
}
