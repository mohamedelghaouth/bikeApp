import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {path:'', component : HomeComponent,},
  {path:'admin/view/:id',  canActivate:[AuthGuard],component : ViewRegistrationComponent},
  {path:'admin',  canActivate:[AuthGuard], component : AdminComponent},
  {path:'callback', component : CallbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
