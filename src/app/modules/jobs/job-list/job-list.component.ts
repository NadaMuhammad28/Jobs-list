import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  form!:FormGroup
jobs$!:Observable<any>
  constructor (private jobService: JobService,private fb :FormBuilder){
  }
  jobTitle$!:Observable<any>

ngOnInit(): void {
  this.createForm()
  this.jobs$= this.getAllJobs()
  this.jobTitle$=this.getJobTitles()
}

createForm(){
  this.form = this.fb.group({
    jobTitle:[null]
  })
}


onSelectedJobTitleChane(){

}

  getAllJobs(){
    return this.jobService.getAllJobjs()

  }
  getJobTitles(){
    return this.jobService.getAllJobjs().pipe(map(job=>job.title), tap(r=>console.log(r)
    ))
  }
}
