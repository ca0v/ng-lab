import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-meta-library',
  templateUrl: './ng-meta-library.component.html',
  styleUrls: ['./ng-meta-library.component.css']
})
export class NgMetaLibraryComponent {
  collapse = true;
  
  code = `
  import { Component } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser'
  `

}
