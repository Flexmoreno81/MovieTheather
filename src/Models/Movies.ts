export interface Movies {
    movieId?: number;

    title: string,
    director: string,
    genre: string,
    rating: string,
    runtime: number,
    releaseYear: string,
    isEditable?: boolean, 
    isNew?: boolean, 
    editableMovie?: Movies
  }