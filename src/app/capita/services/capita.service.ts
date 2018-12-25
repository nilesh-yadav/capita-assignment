import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CapitaService {

getRecordsUrl = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks";
  addRecordUrl = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks";
  deleteRecordUrl = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks/";

  constructor( private _http:Http ) { }

  getRecords() {

      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');  

      let options = new RequestOptions({ headers: myHeaders });

  	  return this._http.get( this.getRecordsUrl, options ).pipe(map( ( response: Response ) => response.json() ) );
  }

  addRecord( objRecord ) {

        let objRecord = {
                     "fields":{
                         "title":{
                            "stringValue": objRecord.title
                         },
                         "description":{
                            "stringValue": objRecord.description
                         }
                     }
                  };

    		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      	let options = new RequestOptions({ headers: cpHeaders });

    		return this._http.post( this.addRecordUrl, objRecord, options )
    						.pipe( map( ( response: Response ) => response.json() ) );
  }

  deleteRecord( id ) {

        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this._http.delete( this.deleteRecordUrl + "/{id}", options )
                .pipe( map( ( response: Response ) => response.json() ) );
  }
}
