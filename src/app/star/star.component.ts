import { Component,OnInit,Input,EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-star',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() rating: number ;
  starWidth:number=0;
  startoProduct: any;
  constructor(){
    this.rating = 0;
    this.starWidth = this.rating*90/5;
  }
  // @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
 
  

  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5; 
  }
  // onClick(): void {
  //   this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  // }
  

    
   }
 


  
  
  



