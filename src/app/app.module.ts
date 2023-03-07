import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
}
import { AppRoutingModule } from './app-routing.module'; //my routes from app-routing.module.ts
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './components/landing/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
