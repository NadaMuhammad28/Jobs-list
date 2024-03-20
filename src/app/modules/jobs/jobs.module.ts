import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobTitleListComponent } from './job-title-list/job-title-list.component';

@NgModule({
  declarations: [JobListComponent, JobTitleListComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],exports:[JobListComponent,JobTitleListComponent ]
})
export class JobsModule { }
