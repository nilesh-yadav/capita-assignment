import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CapitaService {

  getRecordsUrl: string = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks";
  addRecordUrl: string = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks";
  deleteRecordUrl:string = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks/";


  getRecordsUrl = "http://localhost/API/project-capita/getRecords.php";
  addRecordUrl = "http://localhost/API/project-capita/addRecord.php";
  deleteRecordUrl = "http://localhost/API/project-capita/deleteRecord.php";

  cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.cpHeaders });

  constructor( private _http:Http ) { }

  getRecords() {

  	  return this._http.get( this.getRecordsUrl, this.options ).pipe(map( ( response: Response ) => response.json() ) );
  }

  addRecord( objRecord ) {

    		return this._http.post( this.addRecordUrl, objRecord, this.options )
    						.pipe( map( ( response: Response ) => response.json() ) );
  }

  deleteRecord( id ) {

        return this._http.delete( this.deleteRecordUrl + "{id}", this.options )
                .pipe( map( ( response: Response ) => response.json() ) );
  }
}
