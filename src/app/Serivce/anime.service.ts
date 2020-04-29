import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private httpClient:HttpClient) { }

  //Was orginally gonna be an anime news/list api
  //But I couldnt get any of them to work right.
  GetTechNews():Observable<any>{
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=technology&apiKey=7512444361e04ac48090e1a5e2e5b07c');
  }
}
