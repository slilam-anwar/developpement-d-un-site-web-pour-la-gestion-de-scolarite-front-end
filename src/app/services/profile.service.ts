import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  server = 'http://profile/';
  headers: Headers =new Headers;
  options : any;

  constructor(private _http:Http) { 
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-requested-with', 'XMLHttpRequest');
    this.options =new RequestOptions({headers: this.headers});
  }

  addClasse(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+"addclasse",data,this.options).map(
      res => res.json()
    );
  }


  showAllClasses(){
    return this._http.get(this.server+"getclasses")
        .map(res=>res.json());
  }

  showClasse(id) {
    return this._http.get(this.server+"select_classe/"+id).map(
           res => res.json()
    );
  }

  editClasse(info) {
   var data= JSON.stringify(info);
   return this._http.post(this.server+"editclasse",data,this.options).map(
     res => res.json()
   );
  }

  deleteclasse(id) {
    return this._http.get(this.server+"delete_classe/"+id).map(
      res => res.json()
    );
  }






  addMatiere(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+"addmatiere",data,this.options).map(
      res => res.json()
    );
  }


  showAllMatieres(){
    return this._http.get(this.server+"getmatieres")
        .map(res=>res.json());
  }

  showMatiere(id) {
    return this._http.get(this.server+"select_matiere/"+id).map(
           res => res.json()
    );
  }

  editMatiere(info) {
   var data= JSON.stringify(info);
   return this._http.post(this.server+"editmatiere",data,this.options).map(
     res => res.json()
   );
  }

  deletematiere(id) {
    return this._http.get(this.server+"delete_matiere/"+id).map(
      res => res.json()
    );
  }








  addEnseignant(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+"addenseignant",data,this.options).map(
      res => res.json()
    );
  }


  showAllEnseignants(){
    return this._http.get(this.server+"getenseignants")
        .map(res=>res.json());
  }

  showEnseignant(id) {
    return this._http.get(this.server+"select_enseignant/"+id).map(
           res => res.json()
    );
  }

  editEnseignant(info) {
   var data= JSON.stringify(info);
   return this._http.post(this.server+"editenseignant",data,this.options).map(
     res => res.json()
   );
  }

  deletenseignant(id) {
    return this._http.get(this.server+"delete_enseignant/"+id).map(
      res => res.json()
    );
  }






 
  addEtudiant(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+"addetudiant",data,this.options).map(
      res => res.json()
    );
  }


  showAllEtudiants(){
    return this._http.get(this.server+"getetudiants")
        .map(res=>res.json());
  }

  showEtudiant(id) {
    return this._http.get(this.server+"select_etudiant/"+id).map(
           res => res.json()
    );
  }

  editEtudiant(info) {
   var data= JSON.stringify(info);
   return this._http.post(this.server+"editetudiant",data,this.options).map(
     res => res.json()
   );
  }

  deletetudiant(id) {
    return this._http.get(this.server+"delete_etudiant/"+id).map(
      res => res.json()
    );
  }






  addSalle(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+"addsalle",data,this.options).map(
      res => res.json()
    );
  }


  showAllSalles(){
    return this._http.get(this.server+"getsalles")
        .map(res=>res.json());
  }

  showSalle(id) {
    return this._http.get(this.server+"select_salle/"+id).map(
           res => res.json()
    );
  }

  editSalle(info) {
   var data= JSON.stringify(info);
   return this._http.post(this.server+"editsalle",data,this.options).map(
     res => res.json()
   );
  }

  deletesalle(id) {
    return this._http.get(this.server+"delete_salle/"+id).map(
      res => res.json()
    );
  }
  




  showEmploiClasse(id) {
    return this._http.get(this.server+"emploi_classe/"+id).map(
           res => res.json()
    );
  }
  

  showEmploiEnseignant(id) {
    return this._http.get(this.server+"emploi_enseignant/"+id).map(
           res => res.json()
    );
  }

  

  showEmploiSalle(id) {
    return this._http.get(this.server+"emploi_salle/"+id).map(
           res => res.json()
    );
  }

  

  showEnseignantMatieres(id) {
    return this._http.get(this.server+"enseignant_matieres/"+id).map(
           res => res.json()
    );
  }

  

  showClasseEtudiants(id) {
    return this._http.get(this.server+"classe_etudiants/"+id).map(
           res => res.json()
    );
  }

  


  showClasseMatieres(id) {
    return this._http.get(this.server+"classe_matieres/"+id).map(
           res => res.json()
    );
  }




}
