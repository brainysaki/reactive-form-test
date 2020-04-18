import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 myForm:FormGroup;

 stepCount:number= 1;

ngOnInit(){
  this.myForm = new FormGroup (
    {
      firstName : new FormControl('',[
        Validators.required,
        Validators.minLength(1)
      ]),
      lastName : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      emailAddress : new FormControl('', [
          Validators.required,
          Validators.email
      ])     
    }
  ) 
}

onSubmit(){
  console.log(this.myForm.value);
}

}


