import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ProfileService } from '../services/profile.service';
import {Enseignant} from '../enseignant';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-editenseignant',
  templateUrl: './editenseignant.component.html',
  styleUrls: ['./editenseignant.component.scss']
})
export class EditenseignantComponent implements OnInit {
  id_enseignant = this.route.snapshot.params['id'];

  enseignant: Enseignant;

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOneEnseignant();
  }

  getOneEnseignant() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEnseignant(id)
        .subscribe(enseignant => {
          this.enseignant=enseignant[0];
          this.enseignant.nom=id;


        })
  }

  updateEnseignant() {
    this._profileService
        .editEnseignant(this.enseignant)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg","alert-info","enseignant has been successfully UPDATED.","glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/enseignants']);
  }

  model = new Auth ();

}
