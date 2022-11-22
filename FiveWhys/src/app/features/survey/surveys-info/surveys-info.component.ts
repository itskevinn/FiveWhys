import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IncidentService} from 'src/app/data/services/incident.service';
import {Incident} from "../../../data/models/incident.model";

@Component({
  selector: 'app-surveys-info',
  templateUrl: './surveys-info.component.html',
  styleUrls: ['./surveys-info.component.scss']
})
export class SurveysInfoComponent implements OnInit {
  incidents: Incident[];

  constructor(private incidentService: IncidentService) {
    this.incidents = new Array<Incident>();
  }

  ngOnInit(): void {
    this.getIncidents();
  }

  private getIncidents(): void {
    this.incidentService.incident$.subscribe(r => {
      this.incidents.push(r);
    });
  }

}
