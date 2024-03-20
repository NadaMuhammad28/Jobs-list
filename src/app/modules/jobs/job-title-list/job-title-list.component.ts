import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-title-list',
  template:`
<form >
  <select formGroupName="jobTitle">
    <option (click)="onselectedJobTitleChane()" *ngFor="let title of jobTitle$ |async ">{{title}}</option>
  </select>
</form>
  `,
  styleUrls: ['./job-title-list.component.css']
})
export class JobTitleListComponent {

  constructor (private jobService:JobService,private fb :FormBuilder){

  }

getJobTitles(){
  return this.jobService.getAllJobjs().pipe(map(job=>job.title), tap(r=>console.log(r)
  ))
}

}
