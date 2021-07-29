import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RoutingModule } from './routing/routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';
import { LastPipe } from './last.pipe';
import { FontDirective } from './font.directive';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotFoundComponent,
    ReposComponent,
    LastPipe,
    FontDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
