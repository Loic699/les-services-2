import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';

import { Cocktail } from '../cocktail.list';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {
cocktails:Cocktail[] = []


  constructor(public getCocktailsService:CocktailService){}

  ngOnInit(): void {
    this.getCocktailsService.addCocktail(new Cocktail("jager bomb", 10, "./assets/jager-bomb.jpg"))
    this.getCocktailsService.addCocktail(new Cocktail ("mojito", 7, "./assets/Mojito.jpg"))
    this.cocktails = this.getCocktailsService.getCocktails()
  }

}
