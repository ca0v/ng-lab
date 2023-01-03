import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-meta-component',
  templateUrl: './ng-meta-component.component.html',
  styleUrls: ['./ng-meta-component.component.css']
})
export class NgMetaComponentComponent {
code = `
<app-ng-meta-component><ng-content></ng-content></app-ng-meta-component>
`;

}
