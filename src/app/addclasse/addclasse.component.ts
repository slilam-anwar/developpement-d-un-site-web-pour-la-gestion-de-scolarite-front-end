import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Classe } from '../classe';

@Component({
  selector: 'app-addclasse',
  templateUrl: './addclasse.component.html',
  styleUrls: ['./addclasse.component.scss']
})
export class AddclasseComponent implements OnInit {

  constructor(
    private router:Router,
    private profileService: ProfileService,
    private messageService: MessageService
               ) { }

  ngOnInit() {
  }

  model = new Classe ();

  addClasse(){
    this.profileService
        .addClasse(this.model)
        .subscribe(response => {
          console.log(response);
          this.messageService.showMessage("div#msg1","alert-info","New Classe has been successfully ADDED.", "glyphicon-ok");
        })
  }

  goBack() {
    this.router.navigate(['/classes']);
  }




}
