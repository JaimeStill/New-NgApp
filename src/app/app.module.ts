import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { ServicesModule } from './services.module';

import {
  Routes,
  RouteComponents
} from './routes';

import { AppComponent } from './app.component';
import { Services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ServicesModule,
    RouterModule.forRoot(Routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
