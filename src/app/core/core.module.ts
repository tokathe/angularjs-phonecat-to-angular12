
import { IAngularStatic } from 'angular';
import CheckMarkFilter from './checkmark/checkmark.filter';
import CorePhoneModule from './phone/phone.module';
declare var angular: IAngularStatic;

const CoreModule = angular.module('core', [CorePhoneModule.name])
.filter('checkmark', CheckMarkFilter);

export default CoreModule;
