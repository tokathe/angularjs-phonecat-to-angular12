import { Phone, PhoneData } from '../core/phone/phone.service';

export class PhoneListController {
  phones: PhoneData[] = [];
  orderProp: string;
  query: string;

  static $inject = ["phone"];

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    })
    this.orderProp = 'age';
    this.query = '';
  }
}
