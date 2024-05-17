import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { Router } from '@angular/router';
import { Movies } from '../../../Models/Movies';
import { Title } from '@angular/platform-browser';

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


  public removeMovie(id: number | undefined) {
    this.allMovies = this.allMovies.filter((event: Movies) => {
      return event.movieId != id ; 
    }); 

    if (typeof id == 'number') {
      this.MovieServices.removeMovies(id).subscribe(); 
    } 
  }
  
  
  editMovie(movie: Movies) {
    movie.isEditable = !movie.isEditable;
    movie.isNew = false; 
    if (!movie.isEditable) {
      
      if (typeof movie.movieId == "number") {
        this.MovieServices.putMovie(movie.movieId, movie).subscribe(); 
      } 
    }

    
  }

  addMovie() {
    let newMovie = {
      title: '',
      director:  '',
      genre: '',
      rating:  '',
      runtime: 0,
      releaseYear: '',
      isEditable: true, 
      isNew: true
    };
  
    this.allMovies.push(newMovie);
  }
  
  
  
  submitMovie(movie: Movies) {
    
    movie.isEditable = false;
  

    movie.isNew = false;
  
    this.MovieServices.PostMovie(movie).subscribe((data: Movies) => {
      console.log(data, " was added to the database"); 
    } );
  }
  



}
