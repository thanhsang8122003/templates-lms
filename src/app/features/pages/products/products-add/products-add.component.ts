import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/service/product.service';
import { Product } from '../../../../core/models/product.model';
import { Unit } from '../../../../core/models/unit.model';
import { Category } from '../../../../core/models/category.model';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {
  product: Product = {} as Product;
  units: Unit[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getUnits().subscribe(data => this.units = data);
    this.productService.getCategories().subscribe(data => this.categories = data);
  }

  addProduct() {
   this.productService.addProduct(this.product).subscribe(() => {
  console.log('Thêm sản phẩm thành công');
});
  }

  onImageSelected(event: any) {
    // Upload ảnh rồi set this.product.imageUrl
  }

  generateBarcode() {
    this.product.barcode = 'BC' + Date.now();
  }
}
