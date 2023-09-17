import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent , title: 'Home',canActivate: [AuthGuard]},
  {path: 'movieDetails/:id/:mediaType', component:MoviedetailsComponent ,canActivate:[AuthGuard]},
  {path: 'movieDetails/:id', component:MoviedetailsComponent ,canActivate:[AuthGuard]},
  {path: 'tv', component:TvComponent, title: 'Tv',canActivate: [AuthGuard]},
  {path: 'people', component:PeopleComponent, title: 'People',canActivate: [AuthGuard]},
  {path: 'register', component:RegisterComponent, title: 'Register'},
  {path: 'login', component:LoginComponent, title: 'Login'},
  {path: 'logout', component:LoginComponent},
  {path: 'about', component:AboutComponent , title: 'About',canActivate: [AuthGuard]},
  {path: 'movie', component:MovieComponent, title: 'Movies',canActivate: [AuthGuard]},
  {path: '**', component:NotfoundComponent , title: 'Not found',canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
