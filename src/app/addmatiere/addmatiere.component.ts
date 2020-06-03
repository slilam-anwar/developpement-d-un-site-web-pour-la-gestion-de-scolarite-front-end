import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Matiere } from '../matiere';

@Component({
  selector: 'app-addmatiere',
  templateUrl: './addmatiere.component.html',
  styleUrls: ['./addmatiere.component.scss']
})
export class AddmatiereComponent implements OnInit {

  constructor(
               private profileService: ProfileService,
               private _profileService: ProfileService,
               private router: Router,
               private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAllEnseignants();
    this.getAllClasses();
  }

  model = new Matiere ();
  enseignants:any;
  classes:any;

  addMatiere(){
    this.profileService
        .addMatiere(this.model)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg1","alert-info","New Classe has been successfully ADDED.", "glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/matieres']);
  }

  getAllEnseignants(){
    this._profileService
    .showAllEnseignants()
    .subscribe(enseignants => {
     this.enseignants=enseignants;
     //console.log(this.profiles);
    })
    }

    getAllClasses(){
      this._profileService
      .showAllClasses()
      .subscribe(classes => {
       this.classes=classes;
       //console.log(this.profiles);
      })
      }

//  model = new Auth ();

}
