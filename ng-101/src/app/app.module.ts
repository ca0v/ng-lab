import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryModule } from './dictionary/dictionary.module';

import { AppComponent } from './app.component';
import { CollapseDirective } from './collapse.directive';
import { MetaDataBoundComponent } from './dictionary/meta-data-bound/meta-data-bound.component';
import { MetaPipeComponent } from './dictionary/meta-pipe/meta-pipe.component';
import { SearchInputFormComponent } from './search-input-form/search-input-form.component';
import { MetaRouteComponent } from './dictionary/meta-route/meta-route.component';
import { RouterModule } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    MetaPipeComponent,
    MetaRouteComponent,
    SearchInputFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DictionaryModule,
    RouterModule.forRoot([
      { path: 'dictionary', component: DictionaryComponent },
      { path: 'meta/databound', component: MetaDataBoundComponent },
      { path: 'meta/pipe', component: MetaPipeComponent },
      { path: 'meta/route', component: MetaRouteComponent },
      { path: 'meta/searchform', component: SearchInputFormComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
