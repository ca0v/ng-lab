import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMetaComponentComponent } from './ng-meta-component/ng-meta-component.component';
import { NgMetaModuleComponent } from './ng-meta-module/ng-meta-module.component';
import { NgMetaLibraryComponent } from './ng-meta-library/ng-meta-library.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMetaComponentComponent,
    NgMetaModuleComponent,
    NgMetaLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
