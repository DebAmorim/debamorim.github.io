import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePage } from './components/home-page/home-page';
import { NaviBar } from './components/commons/navi-bar/navi-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NaviBar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
