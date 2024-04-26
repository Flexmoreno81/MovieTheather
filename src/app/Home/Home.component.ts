import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {


  protected welcome_background: string = 'assets/IMG/homepage_intro.jpg' ; 

  constructor() { }

  ngOnInit() {
  }

}
