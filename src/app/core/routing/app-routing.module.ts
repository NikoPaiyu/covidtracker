import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { covidRoutes } from './routes';

const routes: Routes = covidRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
