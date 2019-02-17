import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      email: ['']
    })
  }

  onSubmit(form: FormGroup){
    const {firstName,lastName,age,email} = form.value;
    const user = new User(firstName,lastName,age,email);
    console.log(user);
  }

}
