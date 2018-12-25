import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CapitaComponent }  from './capita.component';
import { AddrecordComponent } from './addrecord/addrecord.component';

const routes: Routes = [
	{ 	  
	  path: '',
	  children: [ 
	  	{
		   path: '',
		   component: CapitaComponent
		},
		{
		   path: 'addrecord',
		   component: AddrecordComponent
		}			
	  ]
    }
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ReactiveFormsModule]
})
export class CapitaRoutingModule { }
