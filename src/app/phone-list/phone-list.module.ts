import { downgradeComponent } from '@angular/upgrade/static';
import { IAngularStatic } from 'angular';
import CorePhoneModule from '../core/phone/phone.module';;
import { PhoneListComponent } from './phone-list.component';

declare var angular: IAngularStatic;

const PhoneListModule = angular
  .module('phoneList', [CorePhoneModule.name]).directive(
    'phoneList',
    downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
  );

export default PhoneListModule;
