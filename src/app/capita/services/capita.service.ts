import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Record } from '../../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class CapitaService {

  getRecordsUrl: string = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';
  addRecordUrl: string = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';
  deleteRecordUrl:string = 'https://firestore.googleapis.com/v1beta1/';

  constructor( private _http:Http ) { }

  getRecords(): Observable<Record[]> {
    return this._http.get( this.getRecordsUrl ).pipe(
      map((response: Response) => {
        const data = response.json();
        let records = [];
        data.documents.forEach(record => {
            records.push({
                name: record.name,
                title: record.fields.title.stringValue,
                description: record.fields.description.stringValue
            });
        });
        return records;
      })
    );
  }

  addRecord( objRecord ): Observable<any> {
    	return this._http.post( this.addRecordUrl, this.prepareRequestBody(objRecord));
  }

  deleteRecord( name ): Observable<any> {
      return this._http.delete( this.deleteRecordUrl + name );
  }

  prepareRequestBody( objRecord ) {
    return {
      'fields': {
        'title': {
          'stringValue': objRecord.title
        },
        'description': {
          'stringValue': objRecord.description
        }
      }
    };
  }

}
