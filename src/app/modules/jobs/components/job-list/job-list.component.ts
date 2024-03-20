import { Component } from '@angular/core';
import { FormBuilder,  } from '@angular/forms';
import { Observable, } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../../types';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
})
export class JobsListComponent {
jobs$!:Observable<Job[]>
  constructor (private jobService: JobService,private fb :FormBuilder){
  }

ngOnInit(): void {
  this.jobs$= this.getAllJobs()
}


  getAllJobs(){
    return this.jobService.getAllJobs()

  }

  onSelectedJobTitleChange(selectedTitle: string): void {
    this.jobs$ = this.jobService.getJobsByTitle(selectedTitle);
  }
}
