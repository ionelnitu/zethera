import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = { name: '', phone: '', service: '', message: '' };
  submitted = signal(false);

  services = [
    'Manichiură clasică', 'Manichiură SPA', 'Manichiură cu gel',
    'Manichiură semipermanentă', 'Construcție gel', 'Pedichiură estetică',
    'Pedichiură SPA', 'Nail Art / Design', 'Altele'
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted.set(true);
    this.formData = { name: '', phone: '', service: '', message: '' };
  }

  resetForm() {
    this.submitted.set(false);
  }
}
