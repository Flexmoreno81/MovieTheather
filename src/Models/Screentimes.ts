import { Movies } from "./Movies";
import { Theater } from "./Theater";

export interface ScreenTimes {
  screeningId: number, 
  movie: Movies, 
  movieId: number,
  screenTime1: string, 
  theather: Theater, 
  theatherId: number
}