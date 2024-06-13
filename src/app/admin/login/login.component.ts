import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
    });
    onSubmit() {
    if(this.myForm.valid) console.log(this.myForm.value);
    }
}
