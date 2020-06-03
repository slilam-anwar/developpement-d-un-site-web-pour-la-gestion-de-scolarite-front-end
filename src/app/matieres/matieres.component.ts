import { Component, OnInit } from '@angular/core';
import { Matiere } from '../matiere';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {

  matieress = [
    {
      id: 1,
      matiere:'Linux',
      classe:'GINF1',
      enseignant:'GHAILANI',
    },
    {
      id: 2,
      matiere:'Java',
      classe:'GINF2',
      enseignant:'EL HADDAD',
    },
  ];

  constructor( private _profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
    ) { }

matieres:any;

ngOnInit() {
this.getAllMatieres();
}

getAllMatieres(){
this._profileService
.showAllMatieres()
.subscribe(matieres => {
 this.matieres=matieres;
 //console.log(this.profiles);
})
}

deleteMatiere(id) {
var response=confirm("Are you sure you want to delete this matiere?");
if(response==true) {
this._profileService
.deletematiere(id)
.subscribe(response => {
 console.log(response);
 this.getAllMatieres();
 this.messageService.showMessage("div#msg","alert-info","Matiere has been DELETED.","glyphicon-ok")
})
} else { //cancel button
}
}

}
