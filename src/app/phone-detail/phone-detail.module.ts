
declare var angular: angular.IAngularStatic;
import { PhoneDetailComponent } from "./phone-detail.component";
import CorePhoneModule from "../core/phone/phone.module";
import { downgradeComponent } from "@angular/upgrade/static";


const PhoneDetailModule = 
angular
  .module("phoneDetail", ["ngRoute", CorePhoneModule.name])
  .directive("phoneDetail", 
  downgradeComponent({ component: PhoneDetailComponent}) as angular.IDirectiveFactory);

export default PhoneDetailModule;
