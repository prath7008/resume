import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './container/main.component';
import { ShowComponent } from './container/show.component';
import { ApiService } from './services/api-service';
import { HttpService } from './services/http-service';




@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
    ShowComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ApiService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

