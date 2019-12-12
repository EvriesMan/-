import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { JustComponent } from './just/just.component';

const appRoutes: Routes = [
  {path: '' , component: AppComponent},
  {path: 'second' , component: SecondComponent},
  {path: 'just' , component: JustComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    JustComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
