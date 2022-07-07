import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
{
  path:'login', component:LoginComponent
},
{
  path:'signup', component:SignupComponent
},
{
  path:'dashboard', component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
