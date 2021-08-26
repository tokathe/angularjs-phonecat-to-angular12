
import { IAngularStatic } from "angular";
import { PhoneDetailController } from "./phone-detail.component";
import CorePhoneModule from "../core/phone/phone.module";
import phoneDetailHTML from "./phone-detail.template.html";

declare var angular: IAngularStatic;

const PhoneDetailModule = 
angular
  .module("phoneDetail", ["ngRoute", CorePhoneModule.name])
  .component("phoneDetail", {
    template: phoneDetailHTML,
    controller: PhoneDetailController,
});

export default PhoneDetailModule;
