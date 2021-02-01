import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LayoutModule } from './common/layout/layout.module';
import { AuthModule } from './common/auth/auth.module';
import { DashboardComponent } from './common/layout/components/dashboard/dashboard.component';



const routes: Routes = [

  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},

  // {
  //   path: '',
  // }




  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [Auth]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
