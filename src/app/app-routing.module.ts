import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPageComponent } from './tab-page/tab-page.component';

const routes: Routes = [
  { path: 'tab', component:TabPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
