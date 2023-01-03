import { Component } from '@angular/core';

@Component({
  selector: 'app-meta-module',
  templateUrl: './meta-module.component.html',
  styleUrls: ['./meta-module.component.css'],
})
export class MetaModuleComponent {
  collapse = true;
  code = `import { BrowserModule } from '@angular/platform-browser';`;
}
