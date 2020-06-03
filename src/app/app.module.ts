import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ProfileService } from './services/profile.service';
import { MessageService } from './services/message.service';
import { ClassesComponent } from './classes/classes.component';
import { MatieresComponent } from './matieres/matieres.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { SallesComponent } from './salles/salles.component';
import { AddclasseComponent } from './addclasse/addclasse.component';
import { AddmatiereComponent } from './addmatiere/addmatiere.component';
import { AddenseignantComponent } from './addenseignant/addenseignant.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { AddsalleComponent } from './addsalle/addsalle.component';
import { EditclasseComponent } from './editclasse/editclasse.component';
import { EditmatiereComponent } from './editmatiere/editmatiere.component';
import { EditenseignantComponent } from './editenseignant/editenseignant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import { EditsalleComponent } from './editsalle/editsalle.component';
import { EmploiclasseComponent } from './emploiclasse/emploiclasse.component';
import { EmploienseignantComponent } from './emploienseignant/emploienseignant.component';
import { EmploisalleComponent } from './emploisalle/emploisalle.component';
import { ClassematieresComponent } from './classematieres/classematieres.component';
import { EnseignantmatieresComponent } from './enseignantmatieres/enseignantmatieres.component';
import { ClasseEtudiantsComponent } from './classe-etudiants/classe-etudiants.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClassesComponent,
    MatieresComponent,
    EtudiantsComponent,
    EnseignantsComponent,
    SallesComponent,
    AddclasseComponent,
    AddmatiereComponent,
    AddenseignantComponent,
    AddetudiantComponent,
    AddsalleComponent,
    EditclasseComponent,
    EditmatiereComponent,
    EditenseignantComponent,
    EditetudiantComponent,
    EditsalleComponent,
    EmploiclasseComponent,
    EmploienseignantComponent,
    EmploisalleComponent,
    ClassematieresComponent,
    EnseignantmatieresComponent,
    ClasseEtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  providers: [ ProfileService,  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
