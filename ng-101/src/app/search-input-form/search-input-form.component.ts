import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input-form',
  templateUrl: './search-input-form.component.html',
  styleUrls: ['./search-input-form.component.css'],
})
export class SearchInputFormComponent {
  searchInputControl = new FormControl('');
  searchTerm = '';

  search() {
    throw new Error('Method not implemented.');
  }

  ngOnChanges() {
    this.searchTerm = this.searchInputControl.value || '';
  }
}
