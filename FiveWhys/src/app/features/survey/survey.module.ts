import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveysInfoComponent} from './surveys-info/surveys-info.component';
import {SurveyFormComponent} from './survey-form/survey-form.component';
import {SurveyHomeComponent} from "./survey-home/survey-home.component";
import {SharedModule} from "../../shared/shared.module";
import {SurveyRoutingModule} from "./survey-routing.module";


@NgModule({
  declarations: [
    SurveysInfoComponent,
    SurveyFormComponent,
    SurveyHomeComponent
  ],
  exports: [
    SurveyFormComponent,
    SurveysInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule {
}
