import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Enseignant } from '../enseignant';

declare var $:any;

@Component({
  selector: 'app-addenseignant',
  templateUrl: './addenseignant.component.html',
  styleUrls: ['./addenseignant.component.scss']
})
export class AddenseignantComponent implements OnInit {

  constructor(
               private profileService: ProfileService,
               private router: Router,
               private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  model = new Enseignant ();

  addEnseignant(){
    this.profileService
        .addEnseignant(this.model)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg1","alert-info","New Enseignant has been successfully ADDED.", "glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/enseignants']);
  }

 // model = new Auth ();

}
