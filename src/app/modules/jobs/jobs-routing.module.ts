import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from './components/job-list/job-list.component';

const routes: Routes = [
  {path:'', redirectTo:'jobs',pathMatch:'full'},
  {path:'jobs', component:JobsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
