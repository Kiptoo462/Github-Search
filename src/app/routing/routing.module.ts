import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ReposComponent } from '../repos/repos.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AppComponent } from '../app.component';

const routes:Routes=[
  {path:"users",component:UsersComponent},
  {path:"repos",component:ReposComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
