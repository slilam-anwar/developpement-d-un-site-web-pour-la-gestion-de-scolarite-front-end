import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ProfileService } from '../services/profile.service';
import {Matiere} from '../matiere';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-editmatiere',
  templateUrl: './editmatiere.component.html',
  styleUrls: ['./editmatiere.component.scss']
})
export class EditmatiereComponent implements OnInit {

  id_matiere = this.route.snapshot.params['id'];

  matiere: Matiere;

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOneMatiere();
  }

  getOneMatiere() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showMatiere(id)
        .subscribe(matiere => {
          this.matiere=matiere[0];
          this.matiere.nom_matiere=id;

          //console.log(this.profile);
          

        })
  }

  updateMatiere() {
    this._profileService
        .editMatiere(this.matiere)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg","alert-info","Matiere has been successfully UPDATED.","glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/matieres']);
  }

  model = new Auth ();

}
