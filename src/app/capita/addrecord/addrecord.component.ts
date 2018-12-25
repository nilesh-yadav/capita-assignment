import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CapitaService } from '../services/capita.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {

  records: any;

  recordForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
  		description: new FormControl('', [Validators.required])
  });

  constructor( private _capita: CapitaService, private _router: Router ) { }

  ngOnInit() {
  }

  saveRecord() {

      this._capita.addRecord( this.recordForm.value )
                    .subscribe( resResponse => {console.log( resResponse ); } );

      setTimeout( () => {
        this._router.navigate( ['/capita'] );
      }, 1000);
  }

}
