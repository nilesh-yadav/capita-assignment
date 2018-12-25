import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitaRoutingModule } from './capita-routing.module';
import { CapitaComponent } from './capita.component';
import { AddrecordComponent } from './addrecord/addrecord.component';

@NgModule({
  imports: [
    CommonModule,
    CapitaRoutingModule
  ],
  declarations: [CapitaComponent, AddrecordComponent]
})
export class CapitaModule { }
 