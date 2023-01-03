import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMetaComponentComponent } from './ng-meta-component/ng-meta-component.component';
import { NgMetaModuleComponent } from './ng-meta-module/ng-meta-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMetaComponentComponent,
    NgMetaModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
