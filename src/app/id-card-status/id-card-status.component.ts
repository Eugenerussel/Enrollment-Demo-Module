import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-id-card-status',
  imports: [],
  templateUrl: './id-card-status.component.html',
  styleUrl: './id-card-status.component.css'
})
export class IDCardStatusComponent {
  url: string ='https://angular.io';
  styleUrl;
 
  constructor(private sanitizer: DomSanitizer) {
    this.styleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
