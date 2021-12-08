import { IListMovies } from './../models/IMovieApi.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiMovieService {
  language = 'pt-BR';
  region = 'BR';

  private apiUrl = 'https://api.themoviedb.org/3/';
  private keyApi = '?api_key=9cc1718a2d0fc05350599c8ae05c7a26';

  constructor(private http: HttpClient, public toastController: ToastController) {}

  searchMovie(search: string): Observable<IListMovies> {
    const url = `${this.apiUrl}search/movie${this.keyApi}&language=${this.language}&region=${this.region}&query=${search}`;

    return this.http.get<IListMovies>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.showError(erro))
    );
  }

  async showError(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar Api.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
