import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemTimeService } from '../systemtime.service';

import { MetaComponentComponent } from './meta-component/meta-component.component';
import { MetaModuleComponent } from './meta-module/meta-module.component';
import { MetaLibraryComponent } from './meta-library/meta-library.component';
import { MetaDirectiveComponent } from './meta-directive/meta-directive.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MetaProviderComponent } from './meta-provider/meta-provider.component';
import { MetaDataBoundComponent } from './meta-data-bound/meta-data-bound.component';

@NgModule({
  declarations: [
    MetaComponentComponent,
    MetaModuleComponent,
    MetaLibraryComponent,
    MetaDirectiveComponent,
    MetaProviderComponent,
    MetaDataBoundComponent,
    DictionaryComponent,
  ],
  imports: [CommonModule],
  exports: [DictionaryComponent],
  providers: [SystemTimeService],
  bootstrap: [DictionaryComponent],
})
export class DictionaryModule {}
