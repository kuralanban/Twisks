import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-module/auth-module.module').then(
        (a) => a.AuthModuleModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((a) => a.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((a) => a.ProfileModule),
  },

  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((e) => e.ExploreModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((h) => h.AdminModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((a) => a.SearchModule),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./notification/notification.module').then(
        (h) => h.NotificationModule
      ),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./message/message.module').then((m) => m.MessageModule),
  },
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
