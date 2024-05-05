import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NOTFOUNDComponent } from './NOTFOUND/NOTFOUND.component';
import { HomeComponent } from './Home/Home.component';
import { UnAuthorizedComponent } from './UnAuthorized/UnAuthorized.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'theater', loadChildren: () => import("./Theatherss/Theatherss.module").then(m=>m.TheatherssModule) },
  {path: 'movies', loadChildren: () => import('./Movies/Movies.module').then(m=>m.MoviesModule)}, 
  {path: 'admin', loadChildren: () => import ('./Admin/Admin.module').then(m=>m.AdminModule)},
  {path: '401', component: UnAuthorizedComponent},
  {path: 'not-found', component:NOTFOUNDComponent}, 
  {path: "**", redirectTo: 'not-found', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    
  ]
})
export class AppRoutingModule { }
