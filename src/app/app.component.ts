import {Component} from '@angular/core'
import {Employee} from './models/employee.model'

import {formPosterService} from './services/form-poster.service'

import { NgForm } from '@angular/forms';
@Component({
    selector: 'main-comp',
    templateUrl: './app.component.html'
})



export class AppComponent{
languages:string[]=["Node JS","Angular JS", "C#", "Java"]
LanguageValidation:boolean=false;
employeeModel= new Employee(null,'',false,'','',null ,'');

FirstToUpper(value:string){
   
     value= value.trim();
   
    if(value.length>0){
        if(value.length>0){
        
            this.employeeModel.firstName=value.trim().charAt(0).toUpperCase() + value.slice(1);
        }
        else{
                this.employeeModel.firstName=value;
            }
    }

}

constructor(private _formPoster:formPosterService){

}

validateLanguage(event){
      
        if(this.employeeModel.codeLang==="default"){
            this.LanguageValidation=true;
        }
        else{
            this.LanguageValidation=false;
        }
    }
 
    submitForm(form:NgForm){

        if(this.LanguageValidation){
            return;
        }
       this._formPoster.postEmployeeForm(this.employeeModel);
    }
}


