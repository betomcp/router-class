import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' }, //quando tiver urls vazias precisa deste parâmetro (full)
  { path: "sobre", component: SobreComponent },
  { path: "404", component: PageErrorComponent },
  { path: "**", redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
