import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../enseignant';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent implements OnInit {

  enseignantss = [
    {
      id: 1,
      nom:'EL HADDAD',
      prenom:'Mohamed',
      departement: 'MI',
    },
    {
      id: 2,
      nom:'BADIR',
      prenom:'Hassan',
      departement: 'SIC',
    },
    {
      id: 3,
      nom:'FISSOUNE',
      prenom:'Rachida',
      departement: 'SIC',
    },
  ];

  constructor( private _profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
    ) { }

enseignants:any;

ngOnInit() {
this.getAllEnseignants();
}

getAllEnseignants(){
this._profileService
.showAllEnseignants()
.subscribe(enseignants => {
 this.enseignants=enseignants;
 //console.log(this.profiles);
})
}

deleteEnseignant(id) {
var response=confirm("Are you sure you want to delete this enseignant?");
if(response==true) {
this._profileService
.deletenseignant(id)
.subscribe(response => {
 console.log(response);
 this.getAllEnseignants();
 this.messageService.showMessage("div#msg","alert-info","Enseignant has been DELETED.","glyphicon-ok")
})
} else { //cancel button
}
}


}
