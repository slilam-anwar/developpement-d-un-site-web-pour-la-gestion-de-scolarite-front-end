import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {ClasseMatieres} from '../classesmatieres';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-classematieres',
  templateUrl: './classematieres.component.html',
  styleUrls: ['./classematieres.component.scss']
})
export class ClassematieresComponent implements OnInit {

  classesmatieres : ClasseMatieres;
  id_classe = this.route.snapshot.params['id'];

  matieress = [
    {
      id: 1,
      matiere:'Linux',
      enseignant:'GHAILANI',
    },
    {
      id: 2,
      matiere:'Java',
      enseignant:'EL HADDAD',
    },
  ];

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getClasseMatieres();
  }

  getClasseMatieres() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showClasseMatieres(id)
        .subscribe(classesmatieres => {
          this.classesmatieres=classesmatieres;

          //console.log(this.profile);
          

        })
  }

}
