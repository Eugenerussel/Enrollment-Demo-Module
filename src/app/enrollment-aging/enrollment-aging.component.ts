import { UrlCodec } from '@angular/common/upgrade';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-enrollment-aging',
  imports: [],
  templateUrl: './enrollment-aging.component.html',
  styleUrl: './enrollment-aging.component.css'
})
export class EnrollmentAgingComponent {
  url: string ='https://angular.io'
  styleUrl;
 
  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
