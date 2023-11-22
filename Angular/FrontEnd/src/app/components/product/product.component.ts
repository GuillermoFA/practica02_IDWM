import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, catchError, takeUntil } from 'rxjs';
import { Product } from 'src/app/Product';
import { ProductsApiService } from 'src/app/products-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  products: any[] = [];
  productsForm!: FormGroup;
  private ngUnsubscribe = new Subject();
  router: any;



  constructor(private apiService: ProductsApiService, private fb: FormBuilder ) {
    this.productsForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [''],
    });
  }

  ngOnInit(): void
  {
    this.getProducts();
  }
  getProducts() {
    this.apiService.getProducts().pipe(
      takeUntil(this.ngUnsubscribe),
      catchError((error) => {
        console.error('Error al obtener productos:', error);
        return [];
      })
    ).subscribe((data) => {
      this.products = data;
    });
  }


  addProduct() {
    const newProduct: Product = this.productsForm.value;
    this.apiService.addProduct(newProduct).subscribe(
      (createdProduct) => {
        this.products.push(createdProduct);
        this.productsForm.reset();
      },
      (error) => {
        console.error('Error al agregar producto:', error);
      }
    );
  }

  updateProduct(product: Product) {
    this.apiService.updateProduct(product).subscribe(
      () => {
        const index = this.products.findIndex((p) => p.id === product.id);
        this.products[index] = product;
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error al actualizar producto:', error);
      }
    );
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe(
      () => {
        const index = this.products.findIndex((p) => p.id === id);
        this.products.splice(index, 1);
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
      }
    );
  }



}
