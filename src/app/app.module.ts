import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { LatestpostComponent } from './latestpost/latestpost.component';
import { ContatusComponent } from './contatus/contatus.component';
import { ConterComponent } from './conter/conter.component';
import { CustomerComponent } from './customer/customer.component';
import { ServiceComponent } from './service/service.component';
import { LoansComponent } from './loans/loans.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { PageaboutComponent } from './pageabout/pageabout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutspadComponent } from './aboutspad/aboutspad.component';
import { HistoryComponent } from './history/history.component';
import { TimeComponent } from './time/time.component';
import { ServicesComponent } from './services/services.component';
import { TypeserviceComponent } from './typeservice/typeservice.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SubfooterComponent,
    LatestpostComponent,
    ContatusComponent,
    ConterComponent,
    CustomerComponent,
    ServiceComponent,
    LoansComponent,
    AboutComponent,
    FormComponent,
    PageaboutComponent,
    AboutusComponent,
    AboutspadComponent,
    HistoryComponent,
    TimeComponent,
    ServicesComponent,
    TypeserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
