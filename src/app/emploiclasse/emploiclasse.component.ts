import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {EmploiClasse} from '../emploiclasse';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-emploiclasse',
  templateUrl: './emploiclasse.component.html',
  styleUrls: ['./emploiclasse.component.scss']
})
export class EmploiclasseComponent implements OnInit {
  emploiclasse: EmploiClasse;
  id_emploi = this.route.snapshot.params['id'];

  
  emplois = [
    [  'Lundi',

       'Cycle de vie Logiciel',
       'Badir',
       'B20',

       'Cycle de vie Logiciel',
       'Badir',
       'B20',

       'Programmation Système',
       'Amechnoue',
       'B19',

       'Programmation Système',
       'Amechnoue',
       'B19',
  ],
      [  'Mardi',

      'Base de données distribuées',
      'Fissoune',
      'B14',

      'Base de données distribuées',
      'Fissoune',
      'B14',

      'Programmation Système',
      'Amechnoue',
      'B19',

      'Espagnole',
      'Tahiri',
      'B22',
    ],
    [  'Mercredi',

       'JAVA',
       'EL HADDAD',
       'B14',

       'JAVA',
       'EL HADDAD',
       'B14',

       '',
       '',
       '',

       '',
       '',
       '',
  ],
      [  'Jeudi',

      'UML',
      'EL ALAMI',
      'B14',


      'UML',
      'EL ALAMI',
      'B14',


      'Francais',
      'Zaamouni',
      'C1',


      'Francais',
      'Zaamouni',
      'C1',
    ],
      [  'Vendredi',


      'IHM',
      'EL ALAMI',
      'B14',


      'IHM',
      'EL ALAMI',
      'B14',


      'Management du projet',
      'CHICHI',
      'b19',


      'Management du projet',
      'CHICHI',
      'b19',
  ],
      [  'Samedi',


      '',
      '',
      '',


      '',
      '',
      '',


      '',
      '',
      '',


      '',
      '',
      '',
    ],
    
  
  ];

  


  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEmploiClasse();
  }

  getEmploiClasse() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showEmploiClasse(id)
        .subscribe(emploiclasse => {
          this.emploiclasse=emploiclasse;

          //console.log(this.profile);
          

        })
  }

}
