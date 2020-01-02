import { Validators, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'
import { Directive, Input } from '@angular/core';
@Directive({
    selector: '[appSelectValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting : SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {

    // @Input('appSelectValidator') selectRequired:string;
    validate(control: AbstractControl): { [key: string]: any } | null {
    
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    }
}