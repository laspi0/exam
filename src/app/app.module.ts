import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

const routes: Routes = [
  { path: 'etudiants', component: EtudiantComponent },
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }