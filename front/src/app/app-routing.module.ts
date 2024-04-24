// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin_role.guard';
import { assistantGuard } from './guards/assistant_role.guard';
import { encadrantGuard } from './guards/encadrant_role.guard';
import { stagiaireGuard } from './guards/stagiaire_role.guard';


const routes: Routes = [
  // {
  //   path: 'main',
  //   loadChildren: ()=> import ("./my_module/mymodule.module").then(m => m.MyModule)
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canActivate : [authGuard, adminGuard],
    loadChildren: () => import('./theme/layouts/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'assistant',
    canActivate : [authGuard, assistantGuard],
    loadChildren: () => import('./theme/layouts/assistant/assistant.module').then(m => m.AssistantModule)
  },
  {
    path: 'encadrant',
    canActivate : [authGuard, encadrantGuard],
    loadChildren: () => import('./theme/layouts/encadrant/encadrant.module').then(m => m.EncadrantModule)
  },
  {
    path: 'stagiaire',
    canActivate : [authGuard, stagiaireGuard],
    loadChildren: () => import('./theme/layouts/stagiaire/stagiaire.module').then(m => m.StagiaireModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path : 'admin',
  //   loadChildren : ()=> import ("./theme/layouts/admin/admin.module").then(m => m.AdminModule)
  // },
  // {
  //   path: '',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: 'dashboard/default',
  //       loadComponent: () => import('./demo/default/dashboard/dashboard.component')
  //     },
  //     {
  //       path: 'typography',
  //       loadComponent: () => import('./demo/ui-component/typography/typography.component')
  //     },
  //     {
  //       path: 'card',
  //       loadComponent: () => import('./demo/component/card/card.component')
  //     },
  //     {
  //       path: 'breadcrumb',
  //       loadComponent: () => import('./demo/component/breadcrumb/breadcrumb.component')
  //     },
  //     {
  //       path: 'spinner',
  //       loadComponent: () => import('./demo/component/spinner/spinner.component')
  //     },
  //     {
  //       path: 'color',
  //       loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
  //     },
  //     {
  //       path: 'sample-page',
  //       loadComponent: () => import('./demo/other/sample-page/sample-page.component')
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
