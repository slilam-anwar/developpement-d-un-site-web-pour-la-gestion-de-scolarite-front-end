import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {EnseignantMatiere} from '../enseignantmatiere';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-enseignantmatieres',
  templateUrl: './enseignantmatieres.component.html',
  styleUrls: ['./enseignantmatieres.component.scss']
})
export class EnseignantmatieresComponent implements OnInit {

  enseignantmatiere : EnseignantMatiere;
  id_enseignant = this.route.snapshot.params['id'];

  matieress = [
    {
      id: 1,
      matiere:'Linux',
      classe:'GINF1',
      enseignant:'EL HADDAD',
    },
    {
      id: 2,
      matiere:'Java',
      classe:'GINF2',
      enseignant:'EL HADDAD',
    } 
  ];

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEnseignantMatieres();
  }

  getEnseignantMatieres() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEnseignantMatieres(id)
        .subscribe(enseignantmatiere => {
          this.enseignantmatiere=enseignantmatiere;

          //console.log(this.profile);
          

        })
  }


}
