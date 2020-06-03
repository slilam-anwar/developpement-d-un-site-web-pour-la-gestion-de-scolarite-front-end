import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ProfileService } from '../services/profile.service';
import {Etudiant} from '../etudiant';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-editetudiant',
  templateUrl: './editetudiant.component.html',
  styleUrls: ['./editetudiant.component.scss']
})
export class EditetudiantComponent implements OnInit {
  id_etudiant = this.route.snapshot.params['id'];

  etudiant: Etudiant;
  classes:any;

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOneEtudiant();
    this.getAllClasses();
  }

  getOneEtudiant() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEtudiant(id)
        .subscribe(etudiant => {
          this.etudiant=etudiant[0];
          this.etudiant.cne=id;

        })
  }

  updateEtudiant() {
    this._profileService
        .editEtudiant(this.etudiant)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg","alert-info","Etudiant has been successfully UPDATED.","glyphicon-ok");
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

  model = new Auth ();

}
