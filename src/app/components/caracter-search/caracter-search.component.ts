import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-caracter-search',
  templateUrl: './caracter-search.component.html',
  styleUrls: ['./caracter-search.component.scss']
})
export class CaracterSearchComponent implements OnInit {
  /*
  public query: string='';
  public result: string = '';
  @Input() labelButton: string = '';
  @Output() searchEvent = new EventEmitter();
  constructor() { }

  
  search() {
    this.result = `Consulta realizada con query ${this.query}`;
    this.searchEvent.emit({ query: this.query, resultado: this.result });
  }
*/
ngOnInit(): void {
}
    public query: string;
  public result: string = '';
  @Input() labelButton: string = '';
  // @Output() searchEvent = new EventEmitter();
  // public characters;
  public charactersSearch: any[]=[];
  public messageNoResults: string = '';
  public charname: string = '';
  public idChar:string='';
  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }
   // search() {
  //   this.result = 'Consulta realizada con query "' + this.query + '"';
  //   this.searchEvent.emit({ query: this.query, resultado: this.result });
  // }
  public idInput: any;
  onSubmit(event: any) {
    console.log(event)
    if (event.valid) {
      this.rickmortyService.getCharactersByName(event.value.name).subscribe(
        (data) => {
          this.charactersSearch = data.results;
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }
  errorId:string='';
  searchGetById(event: any) {
    
    if (event.valid) {
      this.rickmortyService.getCharactersById(event.model).subscribe(
        (data) => {
          console.log(data);
          this.charactersSearch = [data];
          this.errorId= '';
        },
        (error) => {
          console.log(error)
          this.charactersSearch = [];
          this.errorId =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }else{
      this.errorId="no valido"
    }
  }
}
