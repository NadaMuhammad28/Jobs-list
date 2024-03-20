import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-title-list',
  template:`
  <div class="row justify-content-center">
    <div class="col-md-6 py-3">
      <form [formGroup]="form">
        <select formControlName="jobTitle" (change)="onSelectedJobTitleChange($event)" class="form-select">
          <option value="null" disabled selected>Select Job Title</option>
          <ng-container *ngIf="jobTitles$ | async as titles">
          <option value="all" >All</option>

          <option *ngFor="let title of titles" [value]="title">{{ title }}</option>
          </ng-container>
        </select>
      </form>
    </div>
  </div>
  `,
})
export class JobTitleListComponent implements OnInit {
  form!: FormGroup;
  jobTitles$!: Observable<string[]>;
  @Output() titleSelected = new EventEmitter<string>();


  constructor(private jobService: JobService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.jobTitles$ = this.jobService.getJobTitles();
  }

  createForm(): void {
    this.form = this.fb.group({
      jobTitle: [null]
    });
  }
get selectedJobTitle(){
  return this.form.get('jobTitle')?.value
}

  onSelectedJobTitleChange(event:any): void {

    this.titleSelected.emit(this.selectedJobTitle);
  }

}
