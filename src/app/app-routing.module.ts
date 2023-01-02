import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/roles',
    component: RolesComponent
  },
  {
    path: '/contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
