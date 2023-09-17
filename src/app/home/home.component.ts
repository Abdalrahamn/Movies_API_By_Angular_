import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  search:string = ''; 

  customOptions: OwlOptions = {
    mouseDrag: true,
    autoplayTimeout: 2000,
    touchDrag: true,
    pullDrag: true,
    dots: false,
   
    loop: true, // Infinite loop
    autoplay: true, // Autoplay
    autoplaySpeed: 1000, // Time between slides in milliseconds
    smartSpeed: 500, // Transition speed in milliseconds
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPerson: any[] = [];

  UrlImage:string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(private _MoviesService: MoviesService){}
  ngOnInit(): void{
    this._MoviesService.getMovies('movie').subscribe({
      next:(res) => {this.trendingMovies = res.results.slice(0, 16); }
   });

   this._MoviesService.getMovies('tv').subscribe({
    next:(res) => { this.trendingTv = res.results.slice(0, 16); }
   });

   this._MoviesService.getMovies('person').subscribe({
    next:(res) => { this.trendingPerson = res.results.slice(0, 16);}
   });

  }
  
}
