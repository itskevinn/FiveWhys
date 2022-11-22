import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyHomeComponent} from "./survey-home/survey-home.component";

const routes: Routes = [
  {
    path: '',
    component: SurveyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {
}
