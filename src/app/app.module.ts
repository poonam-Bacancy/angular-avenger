import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AvengersComponent } from './avengers/avengers.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HttpClientModule } from  '@angular/common/http';
import { AvengerDetailComponent } from './avenger-detail/avenger-detail.component';
import { AvengerShowComponent } from './avenger-show/avenger-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AvengersComponent,
    AvengerDetailComponent,
    AvengerShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
