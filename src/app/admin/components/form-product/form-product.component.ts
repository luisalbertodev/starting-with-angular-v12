import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';

import { MyValidators } from '@app/utils/validators';

import { ProductsService } from '@app/core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private firebaseStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      this.productsService
        .createdProduct(this.form.value)
        .subscribe((response) => {
          console.log({ response });
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValidate]],
      image: ['assets/images/camiseta.png', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  uploadFile(event) {
    const [FILE] = event.target.files;
    const DIR = 'images';

    const FILE_REF = this.firebaseStorage.ref(DIR);
    const TASK = this.firebaseStorage.upload(DIR, FILE);

    TASK.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = FILE_REF.getDownloadURL();
          this.image$.subscribe((url) => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }

  get priceField() {
    return this.form.get('price');
  }
}
