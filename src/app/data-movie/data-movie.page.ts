import { IFilmes } from './../models/IFilmes.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-movie',
  templateUrl: './data-movie.page.html',
  styleUrls: ['./data-movie.page.scss'],
})
export class DataMoviePage implements OnInit {

  movie: IFilmes;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.movie = this.dataService.getData('movie');
    console.log('Filme enviado', this.movie);
  }

}
