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

  ngOnInit() {
    this.moviesServices.getMovies().subscribe((data: Movies []) => {
      this.Movie_List = data; 
    } ); 
  }

}
