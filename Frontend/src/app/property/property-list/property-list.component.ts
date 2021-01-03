import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  NeuGebraucht = 1;
  properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
   if (this.route.snapshot.url.toString()) {
     this.NeuGebraucht =2; // gemeint, dass wir bei rent-property URL sind sonst sind wir am base URL
   }
   this.housingService.getAllProperties(this.NeuGebraucht).subscribe(
     data=>{
       this.properties=data;
       console.log(data);

      }, error => {
        console.log('httperror');
        console.log(error);
      }


   );
  }

}
