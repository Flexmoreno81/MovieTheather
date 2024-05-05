import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenTimes } from '../../../Models/Screentimes';
import { Movies } from '../../../Models/Movies';



@Component({
  selector: 'app-Movie_info',
  templateUrl: './Movie_info.component.html',
  styleUrls: ['./Movie_info.component.css']
})



export class Movie_infoComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
     private ScreenTimeServices: ScreenTimeServiceService) { }

    protected screenTimeInfo: ScreenTimes []  =  []; 
    
  
     getMovieInfo(): Movies {
      return (this.screenTimeInfo[0].movie); 
    }

    
    
    public disticFilter (): ScreenTimes [] {
      let distinctData: ScreenTimes [] = this.screenTimeInfo.filter((value, index, arr) => {
        return index === arr.findIndex(obj => obj.theatherId === value.theatherId);
      });

      return distinctData ; 
    } 


   

    

  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('MovieInfo');  
    var movieID = Number(data); 
     
    this.ScreenTimeServices.getScreenTimeInfoFromMovie(movieID).subscribe( (data: ScreenTimes [])=> {
      this.screenTimeInfo = data; 
      
      console.log(this.screenTimeInfo[0].screenTime1); 
       

    } );  
    
  }

}
