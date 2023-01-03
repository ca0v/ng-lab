import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {DictionaryModule} from './dictionary/dictionary.module'

import { AppComponent } from './app.component';
import { CollapseDirective } from './collapse.directive';
import { MetaDataBoundComponent } from './meta-data-bound/meta-data-bound.component';
import { MetaPipeComponent } from './meta-pipe/meta-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    MetaDataBoundComponent,
    MetaPipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DictionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
