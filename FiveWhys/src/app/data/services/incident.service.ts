import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Incident} from "../models/incident.model";

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private incident: BehaviorSubject<Incident>;
  public incident$: Observable<Incident>;

  constructor() {
    this.incident = new BehaviorSubject<Incident>(null!);
    this.incident$ = this.incident.asObservable();
  }

  public sendIncident(incident: Incident): void {
    this.incident.next(incident);
    this.incident$ = this.incident.asObservable();
  }
}
