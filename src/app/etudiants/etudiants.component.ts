import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {

  etudiantss = [
    {
      id: 1,
      cne:'P136421914',
      nom:'SLILAM',
      prenom:'Anwar',
      classe: 'GINF2',
    },
    {
      id: 2,
      cne:'P136548765',
      nom:'CHEIRI',
      prenom:'Mourad',
      classe: 'GIL3',
    },
    {
      id: 3,
      cne:'P136765987',
      nom:'IBRAHIMI',
      prenom:'Hind',
      classe: 'GSEA1',
    },
  ];

  constructor( private _profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
    ) { }

etudiants:any;

ngOnInit() {
this.getAllEtudiants();
}

getAllEtudiants(){
this._profileService
.showAllEtudiants()
.subscribe(profiles => {
 this.etudiants=profiles;
 //console.log(this.profiles);
})
}

deleteEtudiant(id) {
var response=confirm("Are you sure you want to delete this etudiant?");
if(response==true) {
this._profileService
.deletetudiant(id)
.subscribe(response => {
 console.log(response);
 this.getAllEtudiants();
 this.messageService.showMessage("div#msg","alert-info","Etudiant has been DELETED.","glyphicon-ok")
})
} else { //cancel button
}

}

}
