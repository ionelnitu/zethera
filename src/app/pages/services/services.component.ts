import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  categories = [
    {
      id: 'manichiura',
      icon: '💅',
      title: 'Manichiură',
      items: [
        { name: 'Manichiură clasică', desc: 'Îngrijire completă a unghiilor cu tăiere, pilire și curățare cuticule.' },
        { name: 'Manichiură SPA', desc: 'Ritual de lux cu exfoliere, mască și masaj al mâinilor.' },
        { name: 'Manichiură cu ojă semipermanentă', desc: 'Culoare intensă cu durată de 3-4 săptămâni.' },
        { name: 'Manichiură cu gel', desc: 'Finisaj perfect și rezistent, cu luciu îndelungat.' },
        { name: 'Întreținere gel', desc: 'Refacerea zonei de creștere pentru un aspect proaspăt.' },
        { name: 'Construcție gel', desc: 'Extensii de unghii naturale și solide cu gel builder.' },
        { name: 'Construcție pe șablon', desc: 'Formă personalizată folosind șabloane profesionale.' },
        { name: 'Protecție unghie naturală', desc: 'Strat protector ce întărește și protejează unghia naturală.' },
      ]
    },
    {
      id: 'pedichiura',
      icon: '🦶',
      title: 'Pedichiură',
      items: [
        { name: 'Pedichiură estetică', desc: 'Îngrijire completă a picioarelor pentru un aspect impecabil.' },
        { name: 'Pedichiură SPA', desc: 'Tratament relaxant cu baie, exfoliere și masaj.' },
        { name: 'Pedichiură cu ojă semipermanentă', desc: 'Culoare durabilă pentru picioare perfecte.' },
      ]
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'Design & Nail Art',
      items: [
        { name: 'Nail Art', desc: 'Decorațiuni artistice personalizate pentru fiecare unghie.' },
        { name: 'Baby Boomer', desc: 'Gradient delicat roz-alb pentru un look natural și sofisticat.' },
        { name: 'French', desc: 'Clasicul French manicure, impecabil și elegant.' },
        { name: 'Ombre', desc: 'Tranziție de culori pentru un efect vizual spectaculos.' },
        { name: 'Cristale', desc: 'Aplicare de cristale Swarovski și pietre decorative premium.' },
        { name: 'Pictură manuală', desc: 'Motive unice pictate manual de artista noastră.' },
        { name: 'Efecte speciale', desc: 'Chrome, velvet, mirror și alte finisaje spectaculoase.' },
      ]
    },
    {
      id: 'indepartare',
      icon: '✨',
      title: 'Îndepărtare',
      items: [
        { name: 'Îndepărtare ojă semipermanentă', desc: 'Procedură sigură fără deteriorarea unghiei naturale.' },
        { name: 'Îndepărtare gel', desc: 'Îndepărtare profesională cu produse specializate.' },
      ]
    }
  ];
}
