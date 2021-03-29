import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { PageaboutComponent} from './pageabout/pageabout.component'
import { ServicesComponent} from './services/services.component'
import { ContatusComponent} from './contatus/contatus.component'

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'sobre', component: PageaboutComponent },
  { path: 'servico', component: ServicesComponent },   
  { path: 'contato', component: ContatusComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
