import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UrlPipe } from 'src/app/pipes/url.pipe';

import { RecaptchaModule } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { RolesComponent } from './components/roles/roles.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImagePlaceholderComponent } from './components/image-placeholder/image-placeholder.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    RolesComponent,
    ContactComponent,
    ImagePlaceholderComponent,
    RoleComponent,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
