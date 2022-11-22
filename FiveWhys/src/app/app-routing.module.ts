import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from "./layout/content/content.component";

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'survey',
        loadChildren: () => import('./features/survey/survey.module').then(m => m.SurveyModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/survey',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
