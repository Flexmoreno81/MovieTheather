import { Component, Input, OnInit, Output, output } from '@angular/core';
import { Theater } from '../../../Models/Theater';
import { Router } from '@angular/router';
import { TheatherServicesService } from '../../Services/TheatherServices/TheatherServices.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-Theater',
  templateUrl: './Theater.component.html',
  styleUrls: ['./Theater.component.css']
})
export class TheaterComponent implements OnInit {



  constructor(private router: Router, private theatherServices: TheatherServicesService) { }


  public Theaters: Theater[] = []; 
  public filter_t: Theater[] =  []; 
  public searchQuery: string = ''; 


protected updateFilterArray() {
  if (this.searchQuery === "") {
 
    this.filter_t = this.Theaters ; 
  } else {
  
    this.filter_t = this.Theaters.filter((theater) => {
      return theater.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             theater.city.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
             theater.zipcode.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}

  public redirectPage(theather: Theater): void {
    if (this.Theaters == null) {
      this.router.navigate(["/not-found"]) ; 
    } 
    
    this.router.navigate(['/theater/', theather.theatherId]) ; 
  } 



  

  ngOnInit(): void {
    this.theatherServices.getTheather().subscribe((data: Theater[]) => {
      this.Theaters = data;
      this.filter_t = data; 
      
    });
  }
  

}
