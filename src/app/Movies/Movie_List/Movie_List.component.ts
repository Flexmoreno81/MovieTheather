import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { Movies } from '../../../Models/Movies';
import { MovieFilter } from '../../../Models/MovieFilter';

@Component({
  selector: 'app-Movie_List',
  templateUrl: './Movie_List.component.html',
  styleUrls: ['./Movie_List.component.css']
})
export class Movie_ListComponent implements OnInit {

  constructor(private moviesServices: MovieServicesService, private router: Router) { }

  protected Movie_List: Movies[] = []; 
  protected genreList: string [] = [] ; 
  protected RatingList: string [] = [] ; 
  protected RealseYear: string [] = [] ; 
  private filter_list: Movies [] | null = null; 
  protected orginal_list: Movies [] = [] ; 
  protected movie_Selected: MovieFilter = {
    genre: 'any', 
    Rating: 'any', 
    realseYear: 'any'
  }; 
  


  ngOnInit() {
    this.moviesServices.getMovies().subscribe((data: Movies []) => {
      this.Movie_List = data; 
      this.orginal_list = [...this.Movie_List] ; 
     
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

  
  
  private applyFilters(): void {
    let filteredList = [...this.orginal_list]; // Start with a copy of the original list
    
    // Apply genre filter
    if (this.movie_Selected.genre !== 'any') {
      filteredList = filteredList.filter(movie => movie.genre.toLowerCase().includes(this.movie_Selected.genre.toLowerCase()));
    }
    
    // Apply rating filter
    if (this.movie_Selected.Rating !== 'any') {
      filteredList = filteredList.filter(movie => movie.rating.toLowerCase().includes(this.movie_Selected.Rating.toLowerCase()));
    }
    
    // Apply release year filter
    if (this.movie_Selected.realseYear !== 'any') {
      filteredList = filteredList.filter(movie => movie.releaseYear.toLowerCase().includes(this.movie_Selected.realseYear.toLowerCase()));
    }
    
    // Update the Movie_List with the filtered results
    this.Movie_List = filteredList;
  }
  
  protected onSelectMoviesGenere(selectedGenre: string): void {
    this.movie_Selected.genre = selectedGenre;
    this.applyFilters();
  }
  
  protected onSelectedRating(selectedRating: string): void {
    this.movie_Selected.Rating = selectedRating;
    this.applyFilters();
  }
  
  protected onSelectRealseYear(selectedRealseYear: string): void {
    this.movie_Selected.realseYear = selectedRealseYear;
    this.applyFilters();
  }


  public redirectMovieInfo(item: Movies) {
    this.router.navigate(['/movies/', item.movieId]); 
  } 
  


}

 

  
   
