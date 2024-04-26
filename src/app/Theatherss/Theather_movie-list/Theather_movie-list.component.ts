import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../../Models/Movies';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenFilter } from '../../../Models/ScreenFilter';
import { Theater } from '../../../Models/Theater';
import { TheatherServicesService } from '../../Services/TheatherServices/TheatherServices.service';

@Component({
  selector: 'app-Theather_movie-list',
  templateUrl: './Theather_movie-list.component.html',
  styleUrls: ['./Theather_movie-list.component.css']
})
export class Theather_movieListComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private screenTimeService: ScreenTimeServiceService, private theatherServices: TheatherServicesService) { }

  public id!: number

  protected Movie_List: Movies []  = [] ; 

   Theather_info!: Theater ; 
  
  
  ngOnInit(): void {
    
    const data = this.route.snapshot.paramMap.get('Movie_list');  
    let num_id = Number(data) ; 
    this.id = Number(num_id);

    this.screenTimeService.getMoviesFromScreenTime(this.id).subscribe((data: Movies []) => {
      this.Movie_List = data;   
    } );
    
    this.theatherServices.getThether_info(num_id).subscribe((data: Theater) => {
       this.Theather_info = data; 
    }); 
    
  }
  

}
