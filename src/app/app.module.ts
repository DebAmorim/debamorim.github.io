import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePage } from './components/home-page/home-page';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
