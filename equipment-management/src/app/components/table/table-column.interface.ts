import {TemplateRef} from "@angular/core";

export interface TableColumnInterface {
  name: string;
  filed?: string;
  template?: TemplateRef<any>;
}
