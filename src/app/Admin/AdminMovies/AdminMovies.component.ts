import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { Router } from '@angular/router';
import { Movies } from '../../../Models/Movies';

@Component({
  selector: 'app-AdminMovies',
  templateUrl: './AdminMovies.component.html',
  styleUrls: ['./AdminMovies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  constructor(private MovieServices: MovieServicesService, private router: Router) { }

  protected allMovies: Movies [] = [] ; 
  ngOnInit() {
    this.MovieServices.getMovies().subscribe((data: Movies []) => {
      this.allMovies = data ; 
    } );
  }

}
