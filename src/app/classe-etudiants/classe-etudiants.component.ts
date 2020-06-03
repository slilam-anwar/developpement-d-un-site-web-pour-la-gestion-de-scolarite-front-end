import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {ClasseEtudiants} from '../classesetudiants';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-classe-etudiants',
  templateUrl: './classe-etudiants.component.html',
  styleUrls: ['./classe-etudiants.component.scss']
})
export class ClasseEtudiantsComponent implements OnInit {

  classesetudiants : ClasseEtudiants;
  id_classe = this.route.snapshot.params['id'];

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

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getClasseEtudiants();
  }

  getClasseEtudiants() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showClasseEtudiants(id)
        .subscribe(classesetudiants => {
          this.classesetudiants=classesetudiants;

          //console.log(this.profile);
          

        })
  }

}
