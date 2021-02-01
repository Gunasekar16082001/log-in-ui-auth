import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from  '../../../environments/environment';


import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    // CommonModule,
    LoginComponent,
     RegisterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent 
    
  ],
  providers: [],
  bootstrap: [LoginComponent,RegisterComponent]
})
export class AuthModule { }
