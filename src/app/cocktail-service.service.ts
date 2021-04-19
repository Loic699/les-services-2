import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.list'


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails : Cocktail[] = []

 

  public getCocktails(){
    return this.cocktails
  }

  public addCocktail(cocktail:Cocktail){
  this.cocktails.push(cocktail)
  }
  constructor() { }
}
