import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { Movies } from '../../../Models/Movies';

@Component({
  selector: 'app-Movie_List',
  templateUrl: './Movie_List.component.html',
  styleUrls: ['./Movie_List.component.css']
})
export class Movie_ListComponent implements OnInit {

  constructor(private moviesServices: MovieServicesService) { }

  protected Movie_List: Movies[] = []; 
  protected genreList: string [] = [] ; 
  protected RatingList: string [] = [] ; 
  protected RealseYear: string [] = [] ; 

  ngOnInit() {
    this.moviesServices.getMovies().subscribe((data: Movies []) => {
      this.Movie_List = data; 
    } ); 

    this.moviesServices.getGenreList().subscribe((data: string [])=> {
      this.genreList = data; 
      console.log(data);
    } ); 

    this.moviesServices.getRatingList().subscribe((data: string [])=> {
      this.RatingList = data; 
      console.log(data); 
    } );
    
    this.moviesServices.getRealseYear().subscribe((data: string[]) => {
      this.RealseYear = data; 
    }); 
  }

}
