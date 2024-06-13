import { Component,Query,QueryList,ViewChild } from '@angular/core';
import { IProduct } from '../interface/interproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [FormsModule, CommonModule,StarComponent,RouterLink],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
  listProducts: IProduct[] = [];
  listProductFilter: string = '';
  filteredProducts: IProduct[] = [];

  constructor() {
    this.listProducts = this.products;
    this.filteredProducts = this.products;
  }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  get listFilter(): string {
    return this.listProductFilter;
  }

  set listFilter(value: string) {
    this.listProductFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.listProducts;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listProducts.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  starmessage : any;
  message : string='';
  onRatingClicked(message: string): void {
    this.starmessage =  message
  }

  @ViewChild('starComponent') starComponent!:StarComponent;
  onListProductClicked(rating:number): void {
    this.starmessage = `Đánh giá sản phẩm là ${rating} sao!`;
  }
  
  // áp dụng ViewChild
}
