import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getMovies(mediaType:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=0c000d6b099081fa5395d9ad879777a0`)
  }

  getMoviesById( mediaType:string,id:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=0c000d6b099081fa5395d9ad879777a0`)
  }
  //https://api.themoviedb.org/3/movie/615656?api_key=0c000d6b099081fa5395d9ad879777a0

  getPaginationNum(page:number): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=0c000d6b099081fa5395d9ad879777a0&language=en&sort_by=popularity.desc&page=${page}`)
  }
  //https://api.themoviedb.org/3/discover/movie?api_key=0c000d6b099081fa5395d9ad879777a0&language=en&sort_by=popularity.desc&page=3

}
