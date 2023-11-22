import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/products-api.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditFormComponent {
  addForm!: FormGroup;
  productService: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ProductsApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      image: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      const formData = this.addForm.value;

      this.apiService.addProduct(formData)
        .subscribe(() => {
          this.router.navigate(['/edit-product/:id']);
        });
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}
