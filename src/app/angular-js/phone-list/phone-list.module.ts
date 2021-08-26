import { IAngularStatic } from 'angular';
import CorePhoneModule from '../core/phone/phone.module';;
import { PhoneListController } from './phone-list.component';
import phoneListHTML from './phone-list.template.html';

declare var angular: IAngularStatic;

const PhoneListModule = angular
  .module('phoneList', [CorePhoneModule.name])
  .component('phoneList', {
    template: phoneListHTML,
    controller: PhoneListController,
  });

export default PhoneListModule;
