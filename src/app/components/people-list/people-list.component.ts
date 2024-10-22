import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people.interfaces';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {
  listadoPersonas: People[] = [];

  constructor(private PeopleService: PeopleService) { }

  ngOnInit(): void {
    this.PeopleService.getPeopleList().subscribe(respuesta => {
      this.listadoPersonas = respuesta.results;
    });
  }

  createImg(url: string) {

    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];


    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }


}
