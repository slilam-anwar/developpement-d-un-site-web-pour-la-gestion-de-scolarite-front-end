import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss']
})
export class SallesComponent implements OnInit {

  salless = [
    {
      salle:'B14',
      nbre_places:'52',
    },
    {
      salle:'C1',
      nplaces:'56',
    },
  ];

  constructor( private _profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
    ) { }

salles:any;

ngOnInit() {
this.getAllSalles();
}

getAllSalles(){
this._profileService
.showAllSalles()
.subscribe(salles => {
 this.salles=salles;
 //console.log(this.profiles);
})
}

deleteSalle(id) {
var response=confirm("Are you sure you want to delete this salle?");
if(response==true) {
this._profileService
.deletesalle(id)
.subscribe(response => {
 console.log(response);
 this.getAllSalles();
 this.messageService.showMessage("div#msg","alert-info","Salle has been DELETED.","glyphicon-ok")
})
} else { //cancel button
}
}

}
