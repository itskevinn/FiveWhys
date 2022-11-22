import {Survey} from "./survey.model";

export interface Incident {
  cause: string;
  questions: Survey[];
}
