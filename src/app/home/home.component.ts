import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { MessageService } from '../services/message.service';
import { Auth } from '../auth';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( 
    private profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
   ) { }



   ngOnInit() {
  }

  model = new Auth ();
  



}
