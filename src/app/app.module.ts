import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MyChartPagePage} from "../pages/Chart/my-chart-page/my-chart-page";
import {NewsPagePage} from "../pages/news/news-page/news-page";
import {HttpClient} from "../providers/HttpClient";
import {JsonpModule, HttpModule} from "@angular/http";
import {NewsDetailPagePage} from "../pages/news/news-detail-page/news-detail-page";

@NgModule({
  declarations: [
    MyApp,
    MyChartPagePage,
    HomePage,
    NewsPagePage,
    NewsDetailPagePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:"true",
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyChartPagePage,
    HomePage,
    NewsPagePage,
    NewsDetailPagePage,
    TabsPage
  ],
  providers: [HttpClient]
})
export class AppModule {}
