import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AvailabilityComponent } from './availability/availability.component';
import { AppliancesComponent } from './appliances/appliances.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    AppliancesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
