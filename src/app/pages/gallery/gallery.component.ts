import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  activeFilter = signal('toate');

  filters = ['toate', 'manichiură', 'pedichiură', 'design', 'nail art'];

  // Placeholder gallery items using gradient placeholders
  galleryItems = [
    { category: 'design', label: 'Baby Boomer', colors: ['#f8e8d8', '#f0d4b8'] },
    { category: 'nail art', label: 'Cristale', colors: ['#2a2a2a', '#C9956A'] },
    { category: 'manichiură', label: 'Gel Clasic', colors: ['#1a1a2e', '#c9956a'] },
    { category: 'design', label: 'Ombre Nude', colors: ['#e8d5c4', '#d4a882'] },
    { category: 'nail art', label: 'Pictură Manuală', colors: ['#2d1b33', '#c9956a'] },
    { category: 'pedichiură', label: 'SPA Pedichiură', colors: ['#1a2a2a', '#6abfbf'] },
    { category: 'design', label: 'French', colors: ['#faf8f5', '#e0d8d0'] },
    { category: 'nail art', label: 'Chrome Effect', colors: ['#c0c0c0', '#808080'] },
    { category: 'manichiură', label: 'Semipermanentă', colors: ['#3d1515', '#c9956a'] },
    { category: 'design', label: 'Ombre Roșu', colors: ['#8b0000', '#ff4040'] },
    { category: 'nail art', label: 'Floral', colors: ['#2d3320', '#8fbc8f'] },
    { category: 'pedichiură', label: 'Estetică', colors: ['#2a1a1a', '#c9956a'] },
  ];

  get filteredItems() {
    const f = this.activeFilter();
    return f === 'toate' ? this.galleryItems : this.galleryItems.filter(i => i.category === f);
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
}
