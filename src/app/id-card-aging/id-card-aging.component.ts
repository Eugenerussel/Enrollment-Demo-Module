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
    this.dashboardUrl = this.sanitizeUrl('https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=4fddf656-2dcd-44e9-9cde-4f4c92a29f16&theme=horizon&opt=ctxmenu,currsel');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab; // Update active tab for UI change

    if (tab === '1') {
      this.dashboardUrl = this.sanitizeUrl('https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=4fddf656-2dcd-44e9-9cde-4f4c92a29f16&theme=horizon&opt=ctxmenu,currsel');
    } else if (tab === '2') {
      this.dashboardUrl = this.sanitizeUrl('https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=f0c7df8b-6e81-4d98-95bc-836456d73f47&theme=horizon&opt=ctxmenu,currsel&select=$::%3DYear(clm_processed_date),2024');
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
