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
  message = null;

  constructor( private _capita: CapitaService, private _router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit() {
  		this._capita.getRecords()
  				.subscribe( resResponse => { this.records = resResponse } );
  }

  addRecord() {
      this._router.navigate( ['addrecord'], {relativeTo: this.route});
  }

  deleteRecord(name: string) {
    confirm('Do you want to delete the record?');
    this._capita.deleteRecord( name ).subscribe(
      (response: Response) => {
        this.showTransactionMessage('Deleted successfully!');
        this._capita.getRecords().subscribe(
          ( resResponse => { this.records = resResponse } );
      },
      (error) => this.showTransactionMessage(error)
    );
  }

  showTransactionMessage( message: string ) {
    this.message = message;
    setTimeout(
      () => this.message = null,
      3000
    );
  }

}
