import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PelisResponse, Result } from '../interfaces/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private apiUrl:string  = "https://api.themoviedb.org/3/discover/movie?api_key=e5a99edf78af7cae0d6b94ca39780bf8&primary_release_year="

  buscarPelicula(term:any):Observable<Result[]> {
    const url = `${this.apiUrl}${term}`
    return this.http.get<Result[]>(url)
  }

}


