import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemTimeService } from '../systemtime.service';

import { NgMetaComponentComponent } from '../ng-meta-component/ng-meta-component.component';
import { NgMetaModuleComponent } from '../ng-meta-module/ng-meta-module.component';
import { NgMetaLibraryComponent } from '../ng-meta-library/ng-meta-library.component';
import { NgMetaDirectiveComponent } from '../ng-meta-directive/ng-meta-directive.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { NgMetaProviderComponent } from '../ng-meta-provider/ng-meta-provider.component';
import { MetaDataBoundComponent } from '../meta-data-bound/meta-data-bound.component';

@NgModule({
  declarations: [
    NgMetaComponentComponent,
    NgMetaModuleComponent,
    NgMetaLibraryComponent,
    NgMetaDirectiveComponent,
    NgMetaProviderComponent,
    MetaDataBoundComponent,
    DictionaryComponent,
  ],
  imports: [CommonModule],
  exports: [DictionaryComponent],
  providers: [SystemTimeService],
  bootstrap: [DictionaryComponent],
})
export class DictionaryModule {}
