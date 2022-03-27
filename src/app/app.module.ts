import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { GreetPipe } from './greet.pipe';
import { FullnamePipe } from './fullname.pipe';
import { PowerPipe } from './power.pipe';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    GreetPipe,
    FullnamePipe,
    PowerPipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // have to have this for fetching data with fetch()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
