import {Component} from '@angular/core'
import {Employee} from './models/employee.model'

import {formPosterService} from './services/form-poster.service'

import { NgForm } from '@angular/forms';
@Component({
    selector: 'main-comp',
    templateUrl: './app.component.html'
})



export class AppComponent{
languages:any[]=[
   {id:1, name:"Node JS"},
   {id:1, name:"Angular"},
   {id:1, name:"Java script"},
   {id:1, name:"C#"},
   {id:1, name:"Java"}
  
]
LanguageValidation:boolean=false;
employeeModel= new Employee(null,'',false,'','-1',null ,'','','','');
errorMessage:string;
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
    
        if(this.employeeModel.codeLang==="-1"){
            this.LanguageValidation=true;
        }
        else{
            this.LanguageValidation=false;
        }
    }
 
    submitForm(form:NgForm){
        alert(form);
        if(this.LanguageValidation){
            return;
        }
       this._formPoster.postEmployeeForm(this.employeeModel)
       .subscribe(data=>alert(data),
        error=>this.errorMessage =<any>error);
       
    }
}


