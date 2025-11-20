import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
 categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'ui', name: 'UI & Branding' },
    { id: 'ai', name: 'AI Projects' }
  ];

  selectedCategory = 'all';

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

}
