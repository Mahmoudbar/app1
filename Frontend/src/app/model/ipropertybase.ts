import { DatepickerModule } from "ngx-bootstrap/datepicker";

export interface IPropertyBase {
  Id: number;
  NeuGebraucht: number;
  Name: string;
  PType: string;
  Price: number;
  Kilometerstand: number;
  City: string;
  Image?: string;
  Erstzulassung: |Date ;

}
