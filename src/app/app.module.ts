import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { SharedModule } from './modules/shared/shared.module';
import { ErrorHandlerInterceptor } from './interceptors/Http-error-handler.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
   SharedModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:ErrorHandlerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
