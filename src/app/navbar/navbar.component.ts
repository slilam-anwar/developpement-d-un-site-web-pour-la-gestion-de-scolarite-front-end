import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  public file_src: string='../assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

  setActive (menu: string) {
    $('li').removeClass();
    $('#'+menu).addClass("active");
  }

}
