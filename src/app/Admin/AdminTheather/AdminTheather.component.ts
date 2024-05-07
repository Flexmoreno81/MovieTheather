import { Component, OnInit } from '@angular/core';
import { TheatherServicesService } from '../../Services/TheatherServices/TheatherServices.service';
import { Theater } from '../../../Models/Theater';

@Component({
  selector: 'app-AdminTheather',
  templateUrl: './AdminTheather.component.html',
  styleUrls: ['./AdminTheather.component.css']
})
export class AdminTheatherComponent implements OnInit {

  constructor(private theatherServices: TheatherServicesService) { }

  protected theathers: Theater []  = [] ; 

  ngOnInit() {
    this.theatherServices.getTheather().subscribe((data: Theater []) => {
      this.theathers = data; 
    }); 
  }

}
