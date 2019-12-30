import {NgModule} from '@angular/core'
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import { formPosterService } from './services/form-poster.service';

import { HttpClientModule } from '@angular/common/http';
@NgModule({

    imports:[
        BrowserModule,
        FormsModule,
        
        HttpClientModule
    ],
    declarations:[
        AppComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        formPosterService
    ]
})

export class AppModule{

}