import { Component } from '@angular/core';

@Component({
  selector: 'app-meta-component',
  templateUrl: './meta-component.component.html',
  styleUrls: ['./meta-component.component.css'],
})
export class MetaComponentComponent {
  code = `
<app-meta-component><ng-content></ng-content></app-meta-component>
`;
  collapse = true;
}
