import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryModule } from './dictionary/dictionary.module';

import { AppComponent } from './app.component';
import { CollapseDirective } from './collapse.directive';
import { MetaDataBoundComponent } from './meta-data-bound/meta-data-bound.component';
import { MetaPipeComponent } from './meta-pipe/meta-pipe.component';
import { SearchInputFormComponent } from './search-input-form/search-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    MetaDataBoundComponent,
    MetaPipeComponent,
    SearchInputFormComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, DictionaryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
