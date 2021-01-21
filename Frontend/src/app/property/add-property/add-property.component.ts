import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from 'src/app/model/iproperty';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import {Property} from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 // @ViewChild('Form') addPropertyForm= NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;// ! weg
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  property = new Property();
  // Will come from masters
  Fahrzeugtyp: Array<string> = ['PKW', 'LKW', 'Motorrad']
  /* furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'] */

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    NeuGebraucht: null,
    PType: null,
    Kilometerstand: null,
    City: null,
    Erstzulassung: null

  };



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private housingService: HousingService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        NeuGebraucht: [null, Validators.required],
        PType: [null],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        Erstzulassung: [null, Validators.required],
        Kilometerstand: [null],
      }),

      AddressInfo: this.fb.group({
        Telefonnummer: [null],
        Address: [null],

      }),

      OtherInfo: this.fb.group({
        Gaenge: [null],
        Kraftstoff: [null],
        Feinstaubplakette: [null],
        AnzahlSitzplaetze: [null],
        AnzahlTueren: [null],
        Farbe: [null],
        Description: [null]
      })
      });
  }

//#region <Getter Methods>
  // #region <FormGroups>
      get BasicInfo() {
        return this.addPropertyForm.controls.BasicInfo as FormGroup;
      }

      get PriceInfo() {
        return this.addPropertyForm.controls.PriceInfo as FormGroup;
      }

      get AddressInfo() {
        return this.addPropertyForm.controls.AddressInfo as FormGroup;
      }

      get OtherInfo() {
        return this.addPropertyForm.controls.OtherInfo as FormGroup;
      }
  // #endregion

  //#region <Form Controls>
      get NeuGebraucht() {
        return this.BasicInfo.controls.NeuGebraucht as FormControl;
      }

      get Farbe() {
        return this.OtherInfo.controls.Farbe as FormControl;
      }

      get AnzahlTueren() {
        return this.OtherInfo.controls.AnzahlTueren as FormControl;
      }

      get Feinstaubplakette() {
        return this.OtherInfo.controls.Feinstaubplakette as FormControl;
      }

      get Kraftstoff() {
        return this.OtherInfo.controls.Kraftstoff as FormControl;
      }

      get Gaenge() {
        return this.OtherInfo.controls.Gaenge as FormControl;
      }
      get AnzahlSitzplaetze() {
        return this.OtherInfo.controls.AnzahlSitzplaetze as FormControl;
      }

      get PType() {
        return this.BasicInfo.controls.PType as FormControl;
      }

      get Name() {
        return this.BasicInfo.controls.Name as FormControl;
      }

      get City() {
        return this.BasicInfo.controls.City as FormControl;
      }

      get Price() {
        return this.PriceInfo.controls.Price as FormControl;
      }

      get Kilometerstand() {
        return this.PriceInfo.controls.Kilometerstand as FormControl;
      }

      get Telefonnummer() {
        return this.AddressInfo.controls.Telefonnummer as FormControl;
      }

      get Address() {
        return this.AddressInfo.controls.Address as FormControl;
      }

      get Erstzulassung() {
        return this.PriceInfo.controls.Erstzulassung as FormControl;
      }

      get Description() {
        return this.OtherInfo.controls.Description as FormControl;
      }

  //#endregion
//#endregion

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('Ihre Anzeige wurde erfolgreich aufgegeben');
      console.log(this.addPropertyForm);

      if(this.NeuGebraucht.value === '2') {
        this.router.navigate(['/rent-property']);
      } else {
        this.router.navigate(['/']);
      }


    } else {
      this.alertify.error('Please review the form and provide all valid entries');
    }
  }

  mapProperty(): void {
    this.property.Id = this.housingService.newPropID();
    this.property.NeuGebraucht = +this.NeuGebraucht.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.Price = this.Price.value;
    this.property.Kilometerstand = this.Kilometerstand.value;
    this.property.Telefonnummer = this.Telefonnummer.value;
    this.property.Address = this.Address.value;
    this.property.Erstzulassung = this.Erstzulassung.value;
    this.property.Description = this.Description.value;
    this.property.Gaenge = this.Gaenge.value;
    this.property.Kraftstoff = this.Kraftstoff.value;
    this.property.Feinstaubplakette = this.Feinstaubplakette.value;
    this.property.AnzahlSitzplaetze = this.AnzahlSitzplaetze.value;
    this.property.AnzahlTueren = this.AnzahlTueren.value;
    this.property.Farbe = this.Farbe.value;
    this.property.PostedOn = new Date();
  }

  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }
}
