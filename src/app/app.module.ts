import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/Home.component';
import { NOTFOUNDComponent } from './NOTFOUND/NOTFOUND.component';
import { MoviesModule } from './Movies/Movies.module';
import { TheatherssModule } from './Theatherss/Theatherss.module'; 
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './Admin/Admin.module';
import { UnAuthorizedComponent } from './UnAuthorized/UnAuthorized.component';


@NgModule({
  declarations: [						
    AppComponent,
      NavbarComponent,
      HomeComponent,
      NOTFOUNDComponent,
      UnAuthorizedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, MoviesModule, RouterModule, 
    TheatherssModule, HttpClientModule, AdminModule
  ],
  exports: [RouterModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
