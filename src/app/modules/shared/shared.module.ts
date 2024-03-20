import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { Error404Component } from './pages/error/error.component';



@NgModule({
  declarations: [
    LoaderComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports:[LoaderComponent,Error404Component]
})
export class SharedModule { }
