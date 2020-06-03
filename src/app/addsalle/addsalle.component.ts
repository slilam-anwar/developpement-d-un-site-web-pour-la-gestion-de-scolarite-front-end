import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Salle } from '../salle';

declare var $:any;

@Component({
  selector: 'app-addsalle',
  templateUrl: './addsalle.component.html',
  styleUrls: ['./addsalle.component.scss']
})
export class AddsalleComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  model = new Salle ();

  addSalle(){
    this.profileService
        .addSalle(this.model)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg1","alert-info","New Salle has been successfully ADDED.", "glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/salles']);
  }

//  model = new Auth ();

}
