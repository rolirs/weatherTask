import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SubdayComponent } from './subday/subday.component';
import { SubdaycarouselComponent } from './subdaycarousel/subdaycarousel.component';
import { UserspaceitemComponent } from './userspaceitem/userspaceitem.component';
import { GetdataService } from './getdata.service';
import { IconMatchService } from './iconmatch.service';
import { WeatherTextService } from './weathertext.service';
import { FunctionsService } from './functions.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubdayComponent,
    SubdaycarouselComponent,
    UserspaceitemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [
    GetdataService,
    IconMatchService,
    WeatherTextService,
    FunctionsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
