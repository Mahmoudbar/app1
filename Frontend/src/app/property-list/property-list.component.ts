import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
    "Id":1,
    "Name": "BMW",
    "Type":"Auto1",
    "Price":10000

    },
    {
      "Id":2,
      "Name": "BMW",
      "Type":"Auto2",
      "Price":20000

      },
      {
        "Id":3,
        "Name": "BMW",
        "Type":"Auto3",
        "Price":30000

        },
        {
          "Id":4,
          "Name": "Audi",
          "Type":"Auto4",
          "Price":40000

          },
          {
            "Id":5,
            "Name": "Audi",
            "Type":"Auto5",
            "Price":50000

            },
            {
              "Id":6,
              "Name": "Audi",
              "Type":"Auto6",
              "Price":60000

              }
]

  constructor() { }

  ngOnInit(): void {
  }

}
