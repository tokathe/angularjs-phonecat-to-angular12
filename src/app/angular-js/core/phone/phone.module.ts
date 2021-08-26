
import { IAngularStatic } from "angular";
import PhoneService from "./phone.service";
declare var angular: IAngularStatic;

const CorePhoneModule = angular.module('core.phone', ['ngResource']).factory('Phone', ['$resource', PhoneService]);

export default CorePhoneModule;