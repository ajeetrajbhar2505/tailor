import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GetStartComponent } from './get-start/get-start.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '',
    pathMatch : 'full'
  },
  {
    path : '',
    component : GetStartComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
