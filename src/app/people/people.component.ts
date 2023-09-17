import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  UrlImage:string = 'https://image.tmdb.org/t/p/w500';
  trendingPerson: any [] = [];

  constructor (private _MoviesService:MoviesService){}
  ngOnInit(): void {
    this._MoviesService.getMovies('person').subscribe({
      next:(res) => { this.trendingPerson = res.results.slice(0, 16);}
     });
  
  }
}
