import {Component, OnInit} from '@angular/core';
import { products } from '../products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from "./model/item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Item[] = [];
  constructor(
    private http: HttpClient) { }
  // products = products;
  private productsUrl = 'api/items';  // URL to web api

  check() {
    window.alert('The items status has changed!');
    }
    public getAllItems(){
      let url = "http://localhost:8080/items";
      this.http.get<Item[]>(url).subscribe(
         res => {
          this.products = res;
        },
         err => {
          alert("an error has occured")
        }
     );
    }

  ngOnInit(): void {
    this.getAllItems();
  }

  /** GET items from the server
  getAllItems (): Observable<Item[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  */

}

