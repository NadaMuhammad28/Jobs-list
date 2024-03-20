import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './modules/shared/pages/error/error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/modules/jobs/jobs.module').then(m => m.JobsModule) }

  ,{ path: '**', component:Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
