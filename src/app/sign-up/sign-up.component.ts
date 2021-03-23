import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  //signUp= new FormGroup({});
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*this.signUp = this.formBuilder.group({
      firstname:['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      confirmEmail: ['', Validators.required,Validators.email],
      password: ['', Validators.required, Validators.email],
      confirmPassword: ['', Validators.required]},
      {
        //validator: MustMatch('password', 'confirmPassword')
    });*/
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }
  /*
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUp.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.signUp.reset();
}*/

  
}


