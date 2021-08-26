
declare var angular: IAngularStatic;
import { downgradeInjectable } from "@angular/upgrade/static";
import { IAngularStatic } from "angular";
import {Phone} from "./phone.service";


const CorePhoneModule = angular.module('core.phone', ['ngResource']).factory('phone', downgradeInjectable(Phone));

export default CorePhoneModule;