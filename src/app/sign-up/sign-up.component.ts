import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({});
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.signUpForm = this.formBuilder.group({
      firstname:['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      recaptchaReactive: ['', [Validators.required]]},
     
     );
  }
  get f() { return this.signUpForm.controls; }
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.signUpForm.reset();
}
}