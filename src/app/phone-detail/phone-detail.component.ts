import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone, PhoneDetail } from '../core/phone/phone.service';

@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail.template.html",
})
export class PhoneDetailComponent {
  phone!: PhoneDetail;
  mainImageUrl!: string;

  constructor(activateRoute: ActivatedRoute, phone: Phone) {
    const phoneId = activateRoute.snapshot.paramMap.get('phoneId') ?? '';
    phone.get(phoneId).subscribe( data => {
      this.phone = data;
      this.setImage(data.images[0]);
    })
   }
  
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
