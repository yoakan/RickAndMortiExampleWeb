import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AllCaracterComponent } from './components/all-caracter/all-caracter.component';
import { CaracterSearchComponent } from './components/caracter-search/caracter-search.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MaterialModule } from './material/material.module';
import {} from './material/material.module'


@NgModule({
  declarations: [
    AppComponent,
    AllCaracterComponent,
    CaracterSearchComponent,
    HomeComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
