import { IListGenre } from './../models/IGenre.model';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  language = 'pt-BR';

  private apiUrl = 'https://api.themoviedb.org/3/';
  private keyApi = '?api_key=9cc1718a2d0fc05350599c8ae05c7a26';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  searchGenre(): Observable<IListGenre> {
    const url = `${this.apiUrl}genre/movie/list${this.keyApi}&language=${this.language}`;

    return this.http.get<IListGenre>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.showError(erro))
    );
  }

  async showError(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar Api.',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
