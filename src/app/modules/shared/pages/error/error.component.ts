import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template:`
  <div class="error-page">
  <h1>Error 404: Page Not Found</h1>
  <p>Sorry, the page you are looking for could not be found.</p>
  <button (click)="goBack()">Go Back</button>
</div>

  `,
})
export class Error404Component {
  constructor(private router: Router) {}


  goBack(): void {
    this.router.navigate(['']);
  }

}
