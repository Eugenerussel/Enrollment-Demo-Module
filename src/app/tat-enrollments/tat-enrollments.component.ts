import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tat-enrollments',
  imports: [],
  templateUrl: './tat-enrollments.component.html',
  styleUrl: './tat-enrollments.component.css'
})
export class TATEnrollmentsComponent {
  url: string ='https://angular.io';
  styleUrl;
 
  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
