import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm; // ! weg


  constructor(private router: Router) { }

  ngOnInit() {
  }
  obBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){
    console.log('Congrats, from Submitted');
    console.log(this.addPropertyForm);
  }
}
