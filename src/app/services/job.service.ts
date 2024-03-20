import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  url=  'https://development-api-next.jobsglobal.com:54902/api/v1/jobs/all?pagination_type=paginate&per_page=10'
  getAllJobjs(){

return this.http.get(this.url).pipe(map((res:any)=>res.data))
  }
}
