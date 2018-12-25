import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitaComponent }  from './capita/capita.component';

const routes: Routes = [
	{
	   path: '',
	   redirectTo: '',
	   pathMatch: 'full'
	},
	{
	   path: 'capita',
       loadChildren: './capita/capita.module#CapitaModule'
	}
];
 
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ }