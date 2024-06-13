import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formproduct',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './formproduct.component.html',
  styleUrl: './formproduct.component.css'
})
export class FormproductComponent {
  myForm = new FormGroup({
    productCode: new FormControl('',[Validators.required]),
    productName: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    starRating: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required]),
    });
    onSubmit() {
    if(this.myForm.valid) console.log(this.myForm.value);
    }
}
