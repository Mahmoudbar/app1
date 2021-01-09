import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private housingService: HousingService) { }

    ngOnInit() {
      this.propertyId = +this.route.snapshot.params['id'];
      this.route.data.subscribe(
        (data: Property) => {
          this.property = data['prp'];
        }
      );

     /*   this.route.params.subscribe(
         (params) => {
           this.propertyId = +params['id'];
           this.housingService.getProperty(this.propertyId).subscribe(
             (data: Property) => {
              this.property = data;
            }, error => this.router.navigate(['/'])
          );
         }
      ); */

      this.galleryOptions = [
        {
          width: '100%',
          height: '465px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: true
        }
      ];

      this.galleryImages = [
        {
          small: 'assets/images/A1.jpg',
          medium: 'assets/images/A1.jpg',
          big: 'assets/images/A1.jpg'
        },
        {
          small: 'assets/images/A2.jpg',
          medium: 'assets/images/A2.jpg',
          big: 'assets/images/A2.jpg'
        },
        {
          small: 'assets/images/A3.jpg',
          medium: 'assets/images/A3.jpg',
          big: 'assets/images/A3.jpg'
        },
        {
          small: 'assets/images/A4.jpg',
          medium: 'assets/images/A4.jpg',
          big: 'assets/images/A4.jpg'
        },
        {
          small: 'assets/images/A5.jpg',
          medium: 'assets/images/A5.jpg',
          big: 'assets/images/A5.jpg'
        }
      ];


    }
  }
