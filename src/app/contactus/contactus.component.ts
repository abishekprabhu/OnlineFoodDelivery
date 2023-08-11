import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  selectedLocation: string = 'bangalore';
  mapSrc: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  changeMapSrc(): void {
    switch (this.selectedLocation) {
      case 'bangalore':
        this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=Copper Kitchen Restaurant bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed');
        break;
      // case 'paris':
      //   this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=Copper Kitchen Restaurant bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed');// Paris map URL
      //   break;
      // case 'tokyo':
      //   this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=Copper Kitchen Restaurant bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed');
      //   break;
      // case 'london':
      //   this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=Copper Kitchen Restaurant bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed');
      //   break;
      // case 'sydney':
      //   this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=Copper Kitchen Restaurant bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed');
      //   break;
      default:
        this.mapSrc = '';
    }
  }

}
