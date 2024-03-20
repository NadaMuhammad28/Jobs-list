import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';




import { Observable } from 'rxjs';
import { Job } from '../modules/jobs/types';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl =   'https://development-api-next.jobsglobal.com:54902/api/v1/jobs/all?pagination_type=paginate&per_page=10'
  ;


  private allJobsSubject = new BehaviorSubject<Job[]>([]);

  constructor(private http: HttpClient) {
    this.fetchAllJobs();
  }

  private fetchAllJobs(): void {

    this.http.get<Job[]>(this.apiUrl).subscribe(jobs => {
      this.allJobsSubject.next(jobs);
    });
  }

  getAllJobs(): Observable<Job[]> {
    return this.allJobsSubject.asObservable().pipe(map((res:any)=>res.data))
  }

  getJobTitles(): Observable<string[]> {
    return this.getAllJobs()?.pipe(
      map(jobs => jobs?.map(job => job.title))
    );
  }

  getJobsByTitle(title: string): Observable<Job[]> {
    return this.getAllJobs().pipe(
      map(jobs => {
        if(title=='all') return jobs
        return jobs.filter(job => job.title === title)})
    );
  }
}
