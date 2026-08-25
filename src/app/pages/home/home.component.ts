import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  features = [
    { icon: '✦', title: 'Calitate Premium', desc: 'Produse profesionale de top, rezultate de lungă durată.' },
    { icon: '✦', title: 'Experiență Unică', desc: 'Fiecare vizită — un ritual de relaxare și îngrijire.' },
    { icon: '✦', title: 'Tehnici Moderne', desc: 'Urmărim constant trendurile internaționale în nail art.' },
    { icon: '✦', title: 'Programare Flexibilă', desc: 'Ne adaptăm programului tău, cu confirmare rapidă.' },
  ];

  mainServices = [
    { icon: '💅', name: 'Manichiură', desc: 'Clasică, SPA, gel, ojă semipermanentă și construcție.' },
    { icon: '🦶', name: 'Pedichiură', desc: 'Estetică, SPA și semipermanentă pentru picioare perfecte.' },
    { icon: '🎨', name: 'Nail Art Design', desc: 'French, ombre, cristale, pictură manuală și efecte speciale.' },
  ];

  goToServices() {
    this.router.navigate(['/servicii']);
  }
}
