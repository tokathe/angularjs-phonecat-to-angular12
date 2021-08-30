
import { IAngularStatic } from 'angular';
import CorePhoneModule from './phone/phone.module';
declare var angular: IAngularStatic;

const CoreModule = angular.module('core', [CorePhoneModule.name]);
export default CoreModule;
