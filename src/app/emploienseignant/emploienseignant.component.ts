import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {EmploiEnseignant} from '../emploienseignant';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-emploienseignant',
  templateUrl: './emploienseignant.component.html',
  styleUrls: ['./emploienseignant.component.scss']
})
export class EmploienseignantComponent implements OnInit {

  emploienseignant : EmploiEnseignant;
  id_emploi = this.route.snapshot.params['id'];

  emplois = [
    { jour: 'Lundi',


      matiere1: 'Cycle de vie Logiciel',
      classe1: 'GINF2',
      salle1: 'B20',


      matiere2: 'Cycle de vie Logiciel',
      classe2: 'GINF2',
      salle2: 'B20',


      matiere3: 'Programmation Système',
      classe3: 'GSTR2',
      salle3: 'B19',


      matiere4: 'Programmation Système',
      classe4: 'GSTR2',
      salle4: 'B19',
    },
    { jour: 'Mardi',


      matiere1: 'BD Réparties',
      classe1: 'GINF2',
      salle1: 'B14',


      matiere2: 'BD Réparties',
      classe2: 'GINF2',
      salle2: 'B14',


      matiere3: 'Programmation Système',
      classe3: 'GSTR2',
      salle3: 'B22',


      matiere4: 'Espagnole2',
      classe4: 'GSEA2',
      salle4: 'B22',
    },
    { jour: 'Mercredi',


      matiere1: 'Programmation JAVA',
      classe1: 'GINF3',
      salle1: 'B14',


      matiere2: 'Programmation JAVA',
      classe2: 'GINF3',
      salle2: 'B14',


      matiere3: '',
      classe3: '',
      salle3: '',


      matiere4: '',
      classe4: '',
      salle4: '',
  },
  { jour: 'Jeudi',


      matiere1: 'UML',
      classe1: 'GIL2',
      salle1: 'B20',


      matiere2: 'UML',
      classe2: 'GIL2',
      salle2: 'B20',


      matiere3: 'Francais',
      classe3: 'GINF1',
      salle3: 'B20',


      matiere4: 'Francais',
      classe4: 'GINF1',
      salle4: 'B20',
    },
    { jour: 'Vendredi',


      matiere1: 'IHM',
      classe1: 'GINF2',
      salle1: 'B14',


      matiere2: 'IHM',
      classe2: 'GINF2',
      salle2: 'B14',

  
      matiere3: 'Assurance et Qualité',
      classe3: 'G3EI2',
      salle3: 'B14',

  
      matiere4: 'Assurance et Qualité',
      classe4: 'G3EI2',
      salle4: 'B14',
    },
    { jour: 'Samedi',

   
      matiere1: '',
      classe1: '',
      salle1: '',


      matiere2: '',
      classe2: '',
      salle2: '',


      matiere3: '',
      classe3: '',
      salle3: '',


      matiere4: '',
      classe4: '',
      salle4: '',
    },
    
  
  ];

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEmploiEnseignant();
  }

  getEmploiEnseignant() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEmploiEnseignant(id)
        .subscribe(emploienseignant => {
          this.emploienseignant=emploienseignant;

          //console.log(this.profile);
          

        })
  }

}
