import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {EmploiSalle} from '../emploisalle';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-emploisalle',
  templateUrl: './emploisalle.component.html',
  styleUrls: ['./emploisalle.component.scss']
})
export class EmploisalleComponent implements OnInit {

  emploisalle : EmploiSalle;
  id_emploi = this.route.snapshot.params['id'];

  emplois = [
    { jour: 'Lundi',


      matiere1: 'Cycle de vie Logiciel',
      prof1: 'Badir',
      classe1: 'GINF2',


      matiere2: 'Cycle de vie Logiciel',
      prof2: 'Badir',
      classe2: 'GINF2',


      matiere3: 'Programmation Système',
      prof3: 'Amechnoue',
      classe3: 'GSTR2',


      matiere4: 'Programmation Système',
      prof4: 'Amechnoue',
      classe4: 'GSTR2',
    },
    { jour: 'Mardi',


      matiere1: 'BD Réparties',
      prof1: 'Fissoune',
      classe1: 'GINF2',

 
      matiere2: 'BD Réparties',
      prof2: 'Fissoune',
      classe2: 'GINF2',


      matiere3: 'Programmation Système',
      prof3: 'Amechnoue',
      classe3: 'GSTR2',


      matiere4: 'Espagnole2',
      prof4: 'Dina TAHIRI',
      classe4: 'GSTR2',
    },
    { jour: 'Mercredi',

   
    
      matiere1: 'Programmation JAVA',
      prof1: 'EL HADDAD',
      classe1: 'GIL2',


      matiere2: 'Programmation JAVA',
      prof2: 'EL HADDAD',
      classe2: 'GIL2',

      type3: '',
      matiere3: '',
      prof3: '',
      classe3: '',

      type4: '',
      matiere4: '',
      prof4: '',
      classe4: '',
  },
  { jour: 'Jeudi',


      matiere1: 'UML',
      prof1: 'EL ALAMI',
      classe1: 'GIL2',

 
      matiere2: 'UML',
      prof2: 'EL ALAMI',
      classe2: 'GIL2',

 
      matiere3: 'Francais',
      prof3: 'Zaamoumi',
      classe3: 'GINF1',


      matiere4: 'Francais',
      prof4: 'Zaamoumi',
      classe4: 'GINF1',
    },
    { jour: 'Vendredi',

   
      matiere1: 'IHM',
      prof1: 'EL ALAMI',
      classe1: 'GINF2',

 
      matiere2: 'IHM',
      prof2: 'EL ALAMI',
      classe2: 'GINF2',


      matiere3: 'Assurance et Qualité',
      prof3: 'CHICHI',
      classe3: 'G3EI2',


      matiere4: 'Assurance et Qualité',
      prof4: 'CHICHI',
      classe4: 'G3EI2',
    },
    { jour: 'Samedi',


      matiere1: '',
      prof1: '',
      classe1: '',


      matiere2: '',
      prof2: '',
      classe2: '',


      matiere3: '',
      prof3: '',
      classe3: '',


      matiere4: '',
      prof4: '',
      classe4: '',
    },
    
  
  ];

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEmploiSalle();
  }

  getEmploiSalle() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEmploiSalle(id)
        .subscribe(emploisalle => {
          this.emploisalle=emploisalle;

          //console.log(this.profile);
          

        })
  }

}
