import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ProfileService } from '../services/profile.service';
import {Salle} from '../salle';
import {ActivatedRoute, Params, Router}  from '@angular/router';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-editsalle',
  templateUrl: './editsalle.component.html',
  styleUrls: ['./editsalle.component.scss']
})
export class EditsalleComponent implements OnInit {

  id_salle = this.route.snapshot.params['id'];
  salle: Salle;

  constructor(
    private _profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOneSalle();
  }

  getOneSalle() {
    var id = this.route.snapshot.params['id'];

    this._profileService
        .showSalle(id)
        .subscribe(salle => {
          this.salle=salle[0];
          this.salle.id_salle=id;

          //console.log(this.profile);
          

        })
  }

  updateSalle() {
    this._profileService
        .editSalle(this.salle)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg","alert-info","Salle has been successfully UPDATED.","glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/salles']);
  }

 // model = new Auth ();
}
