import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOTFOUNDComponent } from './NOTFOUND/NOTFOUND.component';
import { HomeComponent } from './Home/Home.component';
import { TheaterComponent } from './Theatherss/Theater/Theater.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'theater', loadChildren: () => import("./Theatherss/Theatherss.module").then(m=>m.TheatherssModule) },
  {path: 'movies', loadChildren: () => import('./Movies/Movies.module').then(m=>m.MoviesModule)}, 
  {path: 'not-found', component:NOTFOUNDComponent}, 
  {path: "**", redirectTo: 'not-found', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
