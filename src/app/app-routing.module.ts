import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AvengersComponent } from './avengers/avengers.component';
import { AvengerDetailComponent } from './avenger-detail/avenger-detail.component';
import { AvengerShowComponent } from './avenger-show/avenger-show.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'avengerdetail', component: AvengerDetailComponent },
  { path: 'avengershow/:id', component: AvengerShowComponent },
  { path: 'avenger/edit/:id', component: AvengersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
