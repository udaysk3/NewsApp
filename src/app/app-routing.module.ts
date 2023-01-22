
import { InfoComponent } from './pages/info/info.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    'path' : '',
    pathMatch : 'full',
    redirectTo : 'home'
  },
  {
    'path' : 'home',
    'component'  :HomeComponent
  },
  {
    'path' : 'profile',
    'component'  :ProfileComponent
  },
  {
    'path' : 'help',
    'component'  :HelpComponent
  },
  {
    'path' : 'info',
    'component'  :InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
