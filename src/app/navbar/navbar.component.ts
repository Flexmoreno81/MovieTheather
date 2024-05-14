import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  protected  logo: string = "assets/IMG/Logo.png"  ; 
  token = localStorage.getItem('token')
  

  ngOnInit() {
  }

}
