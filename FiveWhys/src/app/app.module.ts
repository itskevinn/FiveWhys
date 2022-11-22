import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {SharedModule} from "./shared/shared.module";
import {SurveyModule} from "./features/survey/survey.module";
import {MessageService} from "primeng/api";
import {ContentComponent} from "./layout/content/content.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    SharedModule,
    SurveyModule,
    AppRoutingModule,
    BrowserModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
