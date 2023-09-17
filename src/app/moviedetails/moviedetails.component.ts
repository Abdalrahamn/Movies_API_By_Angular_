import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {

  
  movieDetailsData : any;
  UrlImage:string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService){}
  
  ngOnInit(): void {
   let { id ,  mediaType} = this._ActivatedRoute.snapshot.params;

    this._MoviesService.getMoviesById( mediaType, id ).subscribe({
      next:(res)=>{
        this.movieDetailsData = res;
        console.log(res);
        
      }
    })
  }
}
