import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobTitleListComponent } from './components/job-title-filter/job-title-list.component';
import { JobsListComponent } from './components/job-list/job-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { JobItemComponent } from './components/job-item/job-item.component';

@NgModule({
  declarations: [JobsListComponent, JobTitleListComponent, JobItemComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class JobsModule { }
