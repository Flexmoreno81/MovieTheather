import { Component, OnInit } from '@angular/core';
import { Route, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  protected  logo: string = "assets/IMG/Logo.png"  ; 

  ngOnInit() {
  }

}