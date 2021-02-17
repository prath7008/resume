import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './container/main.component';

import { ShowComponent } from './container/show.component';

const routes: Routes = [{ path: '', component: MainComponent },
{ path: 'show', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
