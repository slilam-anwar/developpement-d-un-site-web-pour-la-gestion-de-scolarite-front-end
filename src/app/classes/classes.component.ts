import { Component, OnInit } from '@angular/core';
import { Classe } from '../classe';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';

declare var $: any;
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classess = [
    {
      classe:'GINF1',
      netudiants:'48',
    },
    {
      classe:'GINF2',
      netudiants:'50',
    },
  ];

  constructor( 
    private _profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
    ) { }

classes:any;

ngOnInit() {
this.getAllClasses();
}

getAllClasses(){
this._profileService
.showAllClasses()
.subscribe(classes => {
 this.classes=classes;
 //console.log(this.profiles);
})
}

deleteClasse(id) {
var response=confirm("Are you sure you want to delete this classe?");
if(response==true) {
this._profileService
.deleteclasse(id)
.subscribe(response => {
 console.log(response);
 this.getAllClasses();
 this.messageService.showMessage("div#msg","alert-info","Classe has been DELETED.","glyphicon-ok")
})
} else { //cancel button
}
}
}
