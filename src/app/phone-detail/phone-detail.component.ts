declare var angular: angular.IAngularStatic;
import { Component } from '@angular/core';
import { RouteParams } from '../ajs-upgraded-providers';
import { Phone, PhoneData, PhoneDetail } from '../core/phone/phone.service';

@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail.template.html",
})
export class PhoneDetailComponent {
  phone!: PhoneDetail;
  mainImageUrl: string = '';

  constructor(routeParams: RouteParams, phone: Phone) {
    const phoneId = routeParams.phoneId;
    phone.get(phoneId).subscribe( data => {
      this.phone = data;
      this.setImage(data.images[0]);
    })
   }
  
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
