import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  NeuGebraucht: number;
  Name: string;
  PType: string;
  Price: number;
  Kilometerstand: number;
  Address: string;
  City: string;
  Telefonnummer: number;
  Image?: string;
  Description?: string;
  PostedOn: |Date;
  PostedBy: number;
  AnzahlTueren?:string;
  AnzahlSitzplaetze?: string;
  Farbe?:string;
  Gaenge:string;
  Kraftstoff:string;
  Feinstaubplakette:string;
  Erstzulassung: |Date;
}
