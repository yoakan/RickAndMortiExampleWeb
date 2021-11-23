import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-all-caracter',
  templateUrl: './all-caracter.component.html',
  styleUrls: ['./all-caracter.component.scss']
})
export class AllCaracterComponent implements OnInit {
  messageNoResults:String="";
  public characters: any[] = [];
  constructor(private charactersService:RickMortyService) { }

  ngOnInit(): void {
    this.messageNoResults = '';
    this.charactersService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results;
        this.messageNoResults = '';
      },
      (error) => {
        this.characters = [];
        this.messageNoResults =
          'Consulta errónea. No se encontraron resultados';
      }
    );
  }

}
