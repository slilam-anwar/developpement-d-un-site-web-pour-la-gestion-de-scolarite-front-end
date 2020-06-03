import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Etudiant } from '../etudiant';

declare var $:any;

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.scss']
})
export class AddetudiantComponent implements OnInit {

  constructor( private _profileService: ProfileService,
               private profileService: ProfileService,
               private router: Router,
               private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAllClasses();
  }

  model = new Etudiant ();
  classes : any;

  addEtudiant(){
    this.profileService
        .addEtudiant(this.model)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg1","alert-info","New Etudiant has been successfully ADDED.", "glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/etudiants']);
  }

  getAllClasses(){
    this._profileService
    .showAllClasses()
    .subscribe(classes => {
     this.classes=classes;
     //console.log(this.profiles);
    })
    }

  //model = new Auth ();

  

}
