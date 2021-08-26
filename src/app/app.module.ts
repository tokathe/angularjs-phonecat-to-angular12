import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import appModule from './angular-js-app';
import { Phone } from './core/phone/phone.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule
  ],
  providers: [ Phone ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appModule.name]);
  }
}
