import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-card-aging',
  imports: [CommonModule],
  templateUrl: './id-card-aging.component.html',
  styleUrl: './id-card-aging.component.css'
})
export class IDCardAgingComponent {
  activeTab: string;
  dashboardUrl: SafeResourceUrl; // Use SafeResourceUrl for iframe src

  constructor(private sanitizer: DomSanitizer) {
    this.activeTab = '1';
    this.dashboardUrl = this.sanitizeUrl('https://www.wikipedia.org');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab; // Update active tab for UI change

    if (tab === '1') {
      this.dashboardUrl = this.sanitizeUrl('https://www.wikipedia.org');
    } else if (tab === '2') {
      this.dashboardUrl = this.sanitizeUrl('https://angular.io');
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
