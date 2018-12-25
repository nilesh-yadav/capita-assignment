import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CapitaService } from './services/capita.service';

@Component({
  selector: 'app-capita',
  templateUrl: './capita.component.html',
  styleUrls: ['./capita.component.css']
})
export class CapitaComponent implements OnInit {

  records = [];

  constructor( private _capita: CapitaService, private _router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit() {
  		this._capita.getRecords()
  				.subscribe( resResponse => { this.records = resResponse } );
  }

  addRecord() {
      this._router.navigate( ['addrecord'], {relativeTo: this.route});
  }

  deleteRecord(id) {

      this._capita.deleteRecord( id )
                        .subscribe( resResponse => { console.log( "Check : " + id ); } );

      this._router.navigate( ['/capita'] );
  }

}
