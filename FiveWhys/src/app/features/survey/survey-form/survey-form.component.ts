import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IncidentService} from "../../../data/services/incident.service";
import {Survey} from "../../../data/models/survey.model";
import {markFormControlsAsDirty} from "../../../shared/func/functions";
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  @ViewChild('surveys') surveyContainer: ElementRef | undefined;
  surveyCounter = 0;
  incidentForm: FormGroup;
  surveys: Array<Survey>;

  constructor(private formBuilder: FormBuilder,
              private incidentService: IncidentService) {
    this.incidentForm = this.buildIncidentFormGroup();
    this.surveys = new Array<Survey>();
  }

  public saveIncident(): void {
    if (!this.isIncidentValid()) return;
    this.incidentService.sendIncident(this.incidentForm.value);
    this.incidentForm.reset();

  }

  private isIncidentValid(): boolean {
    let isValid = false;
    if (this.incidentForm.invalid) {
      markFormControlsAsDirty(this.incidentForm);
      return isValid;
    }
    if (this.surveys.length === 0) {
      return isValid;
    }
    isValid = true;
    return isValid;
  }

  public addSurvey(): void {
    this.surveyCounter++;
    let element = document.createElement('div');
    element.className = 'my-2';
    element.innerHTML = `
    <div class="row my-2">
      <div class="col-12 my-1">
        <input
          class="w-100 p-inputtext p-component p-element"
          placeholder="Pregunta ${this.surveyCounter}"
          id="${this.surveyCounter}"
          type="text"
          />
      </div>
      <div class="col-12 my-1">
        <input
          class="w-100 p-inputtext p-component p-element"
          placeholder="Respuesta ${this.surveyCounter}"
          id="${this.surveyCounter}"
          type="text"
          />
      </div>
    </div>
    `
    if (this.surveyContainer)
      this.surveyContainer.nativeElement.appendChild(element);
  }

  private buildIncidentFormGroup(): FormGroup {
    return this.formBuilder.group({
      cause: ['', Validators.required]
    });
  }

}
