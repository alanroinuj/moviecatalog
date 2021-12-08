import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(v => v.TabsPageModule)
  },
  {
    path: 'venom',
    loadChildren: () => import('./movie/venom/venom.module').then( v => v.VenomPageModule)
  },
  {
    path: 'shang-chi',
    loadChildren: () => import('./movie/shang-chi/shang-chi.module').then( m => m.ShangChiPageModule)
  },
  {
    path: 'data-movie',
    loadChildren: () => import('./data-movie/data-movie.module').then( m => m.DataMoviePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
