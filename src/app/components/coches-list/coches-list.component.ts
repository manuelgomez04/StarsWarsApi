import { Component, OnInit } from '@angular/core';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../interfaces/coches.interfaces';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrl: './coches-list.component.css'
})

export class CochesListComponent implements OnInit {
  listadoCoches: Coche[] = [];

  constructor(private cochesService: CochesService) { }

  ngOnInit(): void {
    this.cochesService.getCochesList().subscribe(respuesta => {
      this.listadoCoches = respuesta.results;
    });

  }

  createImg(url: string) {

    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];


    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }



}