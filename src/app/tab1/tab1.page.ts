import { IListGenre } from './../models/IGenre.model';
import { GenreService } from './../services/genre.service';
import { IListMovies, IMovieApi } from './../models/IMovieApi.model';
import { ApiMovieService } from './../services/api-movie.service';
import { DataService } from './../services/data.service';
import { IFilmes } from './../models/IFilmes.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'Filmes';

  listVideos: IFilmes[] = [
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg',
      title: 'Venom: Tempo de Carnificina',
      releaseDate: '07/10/2021',
      duration: '1h 37m',
      classification: 72,
      genre: ['Ficção científica', 'Ação', 'Aventura'],
      page: '/venom',
    },
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArrOBeio968bUuUOtEpKa1teIh4.jpg',
      title: 'Shang-Chi e a Lenda dos Dez Anéis',
      releaseDate: '02/09/2021',
      duration: '2h 12m',
      classification: 78,
      genre: ['Ação', 'Aventura', 'Fantasia'],
      page: '/shang-chi',
    },
  ];

  listMovie: IListMovies;

  genres: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dataService: DataService,
    public movieService: ApiMovieService,
    public genreService: GenreService,
    public route: Router
  ) {}

  searchMovie(event: any) {
    console.log(event.target.value);
    const search = event.target.value;
    if (search && search.trim() !== '') {
      this.movieService.searchMovie(search).subscribe((data) => {
        console.log(data);
        this.listMovie = data;
      });
    }
  }

  showMovie(movie: IMovieApi) {
    this.dataService.saveData('movie', movie);
    this.route.navigateByUrl('/data-movie');
  }

  async showAlertFavorite() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.showToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Filme foi favoritado!.',
      duration: 2000,
      color: 'success',
      animated: true,
    });
    toast.present();
  }

  ngOnInit() {
    this.genreService.searchGenre().subscribe((data) => {
      console.log('Generos: ', data.genres);
      data.genres.forEach((genre) => {
        this.genres[genre.id] = genre.name;
      });
    });
  }
}
