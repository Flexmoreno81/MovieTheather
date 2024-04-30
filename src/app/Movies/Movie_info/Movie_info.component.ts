import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieServicesService } from '../../Services/MovieServices/MovieServices.service';
import { Movies } from '../../../Models/Movies';
import { ScreenTimeServiceService } from '../../Services/ScreenTimeServices/ScreenTimeService.service';
import { ScreenTimes } from '../../../Models/Screentimes';

@Component({
  selector: 'app-Movie_info',
  templateUrl: './Movie_info.component.html',
  styleUrls: ['./Movie_info.component.css']
})
export class Movie_infoComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
     private ScreenTimeServices: ScreenTimeServiceService) { }

  private screenTimeInfo: ScreenTimes []  = [] ;
  


  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('MovieInfo');  
    var movieID = Number(data); 
     
    this.ScreenTimeServices.getScreenTimeInfoFromMovie(movieID).subscribe( (data: ScreenTimes [])=> {
      this.screenTimeInfo = data; 
    } );  
    
  }

}
