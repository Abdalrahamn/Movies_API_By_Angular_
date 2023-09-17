import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  UrlImage:string = 'https://image.tmdb.org/t/p/w500';
  trendingTv: any [] = [];

  constructor (private _MoviesService:MoviesService){}
  ngOnInit(): void {
    this._MoviesService.getMovies('tv').subscribe({
      next:(res) => { this.trendingTv = res.results.slice(0, 16); }
     });
  }

  
}
