import 'jquery';
import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import './app.scss';
import * as angular from 'angular';
import CoreModule from './core/core.module';
import PhoneDetailModule from './phone-detail/phone-detail.module';
import PhoneListModule from './phone-list/phone-list.module';


const appModule = (angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  CoreModule.name,
  PhoneDetailModule.name,
  PhoneListModule.name
])
.config(["$routeProvider", ($routeProvider: any) => {
  $routeProvider
  .when("/phones", {
    template: "<phone-list></phone-list>",
  })
  .when("/phones/:phoneId", {
    template: "<phone-detail></phone-detail>",
  })
  .otherwise("/phones");
} ]) as any)
.animation(".phone",() => ({
  addClass: (element: any, className: string, done: Function) => {
    if (className !== "selected") return;
    element.css({
      display: "block",
      position: "absolute",
      top: 500,
      left: 0,
    });
    // element.animate(
    //   {
    //     top: 0,
    //   },
    //   done
    // );
    done();
    return (wasCanceled: boolean) => {
      if (wasCanceled) (element as any).stop();
    };
  },
  removeClass: (element: any, className: string, done: Function) => {
    if (className !== "selected") return;

    element.css({
      position: "absolute",
      top: 0,
      left: 0,
    });
    // element.animate(
    //   {
    //     top: -500,
    //   },
    //   done
    // );
    done();

    return (wasCanceled: boolean) => {
      if (wasCanceled) (element as any).stop();
    };
  },
}));
export default appModule;
