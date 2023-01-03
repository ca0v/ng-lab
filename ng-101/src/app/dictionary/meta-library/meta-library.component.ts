import { Component } from '@angular/core';

@Component({
  selector: 'app-meta-library',
  templateUrl: './meta-library.component.html',
  styleUrls: ['./meta-library.component.css'],
})
export class MetaLibraryComponent {
  collapse = true;

  code = `
  import { Component } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser'
  `;
}
