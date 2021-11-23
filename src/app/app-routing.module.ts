import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//importamos el modulo que genera la rutas
import { AllCaracterComponent } from './components/all-caracter/all-caracter.component';
import { CaracterSearchComponent } from './components/caracter-search/caracter-search.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path:"listado",component:AllCaracterComponent},
  { path:"search",component:CaracterSearchComponent},
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'//ruta entera
  },
  {
    path:'**', //si introduce una rama no cubierta vuelve a dirección
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
