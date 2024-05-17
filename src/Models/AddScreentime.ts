import { Movies } from "./Movies";
import { Theater } from "./Theater";

export interface addScreenTime {
  movie: Movies, 
  movieId: number,
  screenTime1: string, 
  theather: Theater, 
  theatherId: number, 
  isEditable?: boolean, 
  isNew?: boolean, 
  editableMovi?: Movies, 
  editableTheather?: Theater,
}