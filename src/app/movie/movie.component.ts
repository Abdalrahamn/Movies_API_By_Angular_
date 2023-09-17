import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(private _MoviesService: MoviesService){}
  
  search:string = '';

  trendingMovies: any[] = [];
  UrlImage:string = 'https://image.tmdb.org/t/p/w500';

  pageItems: any[] = [];
  pushingnum(length: number):number[]{
    for(let i=1; i <= length ; i++){
     this.pageItems.push(i);
    }
    return this.pageItems;
  }
  ngOnInit(): void{
    this.pushingnum(10);

/*     this._MoviesService.getMovies('movie').subscribe({
      next:(res) => {this.trendingMovies = res.results.slice(0, 16); }
   }); */
   this.getPageItem(1);
  }

  getPageItem(num: number){
    this._MoviesService.getPaginationNum(num).subscribe({
      next:(res) => {
       this.trendingMovies = res.results.slice(0, 18);;
      }
     })
   }
  
}
