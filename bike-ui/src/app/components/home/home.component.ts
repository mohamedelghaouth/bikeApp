import { Component, OnInit } from '@angular/core';
import { FormGroup,Validator,FormControl, Validators } from "@angular/forms";
import { BikeService } from "../../services/bike.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  models:string[]=['model1','model2','model3'];
  bikeform: FormGroup;
  validMessage:string="";

  constructor(private bikeService:BikeService) { }

  ngOnInit() {
    this.bikeform=new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required),
      contact: new FormControl(),
    });
  }

  submitRegistration(){
    if (this.bikeform.valid) {
      this.validMessage="great!";
      this.bikeService.createbikeregistration(this.bikeform.value).subscribe(
      _data => {this.bikeform.reset();return true;},
      err => Observable.throw(err)
      )
      
    } else {
      this.validMessage="error!";
    }


  }

}
