import { Component, Input } from '@angular/core';
import { Job } from '../../types';

@Component({
  selector: 'app-job-item',
  template: `
<div class="card">
  <div class="row g-0">
    <div class="col-md-4">
      <img [src]="job.cover" class="img-fluid rounded-start" alt="Job Cover Image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ job.title }}</h5>
        <p class="card-text">{{ job.description }}</p>
        <!-- Add more job details here as needed -->
      </div>
    </div>
  </div>
</div>

  `,
  styleUrls: []
})
export class JobItemComponent {
  @Input() job!: Job
}
