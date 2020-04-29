import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../Serivce/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  TechNews:any=[]
  constructor(private animeService:AnimeService) { 

  }

  ngOnInit() {
    this.animeService.GetTechNews().subscribe(
      (data)=>{
        this.TechNews = data.articles;
      }
    )
  }

}
