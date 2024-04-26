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


  protected searchQuerry: string = ""; 





  public  Theathers: Theater[] = [] ; 


 protected updateFilterArray() {
    this.Theathers = this.Theathers.filter((theater) => {
      // Implement your filtering logic here (e.g., check if theater.name or theater.city contains searchQuery)
      return theater.name.toLowerCase().includes(this.searchQuerry.toLowerCase()) ||
             theater.city.toLowerCase().includes(this.searchQuerry.toLowerCase());
    });
  }

  public redirectPage(theather: Theater): void {
    if (this.Theathers == null) {
      this.router.navigate(["/not-found"]) ; 
    } 
    
    this.router.navigate(['/theater/', theather.theatherId]) ; 
  } 



  

  ngOnInit(): void {
    this.theatherServices.getTheather().subscribe((data: Theater[]) => {
      this.Theathers = data;
      
    });
  }
  

}
