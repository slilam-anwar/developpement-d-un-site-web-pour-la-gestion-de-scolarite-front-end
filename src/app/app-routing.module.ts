import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { MatieresComponent } from './matieres/matieres.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
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



const routes: Routes = [
  {path:'', redirectTo: '/classes', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'addclasse', component:AddclasseComponent},
  {path: 'addmatiere', component:AddmatiereComponent},
  {path: 'addenseignant', component:AddenseignantComponent},
  {path: 'addetudiant', component:AddetudiantComponent},
  {path: 'addsalle', component:AddsalleComponent},
  {path: 'classes', component:ClassesComponent},
  {path: 'matieres', component:MatieresComponent},
  {path: 'enseignants', component:EnseignantsComponent},
  {path: 'etudiants', component:EtudiantsComponent},
  {path: 'salles', component:SallesComponent},
  {path:'editclasse/:id', component:EditclasseComponent},
  {path:'editmatiere/:id', component:EditmatiereComponent},
  {path:'editenseignant/:id', component:EditenseignantComponent},
  {path:'editetudiant/:id', component:EditetudiantComponent},
  {path:'editsalle/:id', component:EditsalleComponent},
  {path:'emploi-classe/:id', component:EmploiclasseComponent},
  {path:'emploi-enseignant/:id', component:EmploienseignantComponent},
  {path:'emploi-salle/:id', component:EmploisalleComponent},
  {path:'classe-matieres/:id', component:ClassematieresComponent},
  {path:'enseignant-matieres/:id', component:EnseignantmatieresComponent},
  {path:'classe-etudiants/:id', component:ClasseEtudiantsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
