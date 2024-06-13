import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  onSubmit(myForm: NgForm){
    if(myForm.valid){
      console.log(myForm.value);
    }else{
      console.log("Form is not invalid");
    }
  }
}
