import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ProfileService } from '../services/profile.service';
import {Classe} from '../classe';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-editclasse',
  templateUrl: './editclasse.component.html',
  styleUrls: ['./editclasse.component.scss']
})
export class EditclasseComponent implements OnInit {
  id_classe = this.route.snapshot.params['id'];

  classe: Classe;

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOneClasse();
  }

  getOneClasse() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showClasse(id)
        .subscribe(classe => {
          this.classe=classe[0];
          this.classe.Nom_classe=id;

          //console.log(this.profile);
          

        })
  }

  goBack() {
    this.router.navigate(['/classes']);
  }

  model = new Auth ();

  updateClasse() {
    this._profileService
        .editClasse(this.classe)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg","alert-info","Classe has been successfully UPDATED.","glyphicon-ok");
        })
  }

}
