import {Injectable} from '@angular/core'
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../models/employee.model'
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class formPosterService{
    constructor(private _Http:HttpClient ){

    }
    url="your web service URL"
    postEmployeeForm(employee): Observable<any[]> {
        console.log("in service", employee);
        return this._Http.post<any[]>(this.url, employee);
    }
    // ---------------------------------old way-----------------------------------

    postEmployeeForm_old(employee:Employee){
        alert("posting data in service");

        let body= JSON.stringify(employee);
        let headers = new HttpHeaders({'content-type':'application/json'})
        let options = {
            headers: headers,token:""
         }

        return this._Http.post('your web service URL', body, options).pipe(
            catchError(this.handleError('addEmployee', body))
          );

       

    }

    private extractData(res:Response){
        let body= res.json();
        return body;
    }
    handleError(addEmployee: string, body: any): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
        throw new Error("Method not implemented.");
    }


}