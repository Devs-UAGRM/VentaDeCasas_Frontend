import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { notAuthenticatedGuardAdmin } from './auth/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    // canActivate: [notAuthenticatedGuardAdmin],
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    canActivate: [isAuthenticatedGuard],
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    canActivate: [isAuthenticatedGuard],
    path: 'casas',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  },
  // error 404
  {
    path: '404',
    component: Error404PageComponent
  },

  // default page
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },

  // otherwise redirect to auth page
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
