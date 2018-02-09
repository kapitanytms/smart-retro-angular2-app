// import { InMemoryDataService } from './services/in-memory-data.service';
import { GetUserService } from './services/getuser.service';
import { SessionService } from './services/session.service';
import { AppRoutingModule } from './my-modules/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { RetroWallComponent } from './components/retro-wall/retro-wall.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { CardService } from './services/card.service';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    LoginComponent,
    RetroWallComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [ SessionService, GetUserService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
