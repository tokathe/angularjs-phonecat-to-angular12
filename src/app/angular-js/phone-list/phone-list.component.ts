
export class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ["Phone"];

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
    this.query = '';
  }
}
