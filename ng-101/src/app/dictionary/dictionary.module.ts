import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMetaComponentComponent } from '../ng-meta-component/ng-meta-component.component';
import { NgMetaModuleComponent } from '../ng-meta-module/ng-meta-module.component';
import { NgMetaLibraryComponent } from '../ng-meta-library/ng-meta-library.component';
import { NgMetaDirectiveComponent } from '../ng-meta-directive/ng-meta-directive.component';
import { DictionaryComponent } from './dictionary/dictionary.component';



@NgModule({
  declarations: [    
    NgMetaComponentComponent,
    NgMetaModuleComponent,
    NgMetaLibraryComponent,
    NgMetaDirectiveComponent,
    DictionaryComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    DictionaryComponent
  ],
  bootstrap: [DictionaryComponent]
})
export class DictionaryModule { }
