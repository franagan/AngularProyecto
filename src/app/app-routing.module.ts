import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/layout/not-found/not-found.component';


const routes: Routes = [
  {
  path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
{
path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
},
{
  path: 'character', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
{
  path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
},
{path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
{path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
{path:'', redirectTo:'/home', pathMatch:'full' },
{path: '404', component: NotFoundComponent},
{path: '**', redirectTo: '/404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
