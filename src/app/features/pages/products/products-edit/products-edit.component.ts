import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { Unit } from 'src/app/core/models/unit.model';
import { Category } from 'src/app/core/models/category.model';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  productId: string = '';
  product: Product | null = null;

  units: Unit[] = [];
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Lấy danh sách Units và Categories để bind dropdown
    this.productService.getUnits().subscribe(data => this.units = data);
    this.productService.getCategories().subscribe(data => this.categories = data);

    // Lấy id sản phẩm từ route
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(p => {
        if (p) {
          this.product = { ...p }; // giữ unitId và categoryId
        }
      });
    }
  }

  save() {
  if (this.product && this.product.id) {
    this.productService.updateProduct(this.product.id, this.product).subscribe({
      next: () => {
        alert('Cập nhật sản phẩm thành công!');
        this.router.navigate(['/products/list']);
      },
      error: (err) => {
        console.error('Lỗi khi cập nhật sản phẩm:', err);
        alert('Có lỗi xảy ra khi cập nhật!');
      }
    });
  }
}


  delete() {
  if (this.product && this.product.id) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      this.productService.deleteProduct(this.product.id).subscribe({
        next: () => {
          alert('Xóa sản phẩm thành công!');
          this.router.navigate(['/products/list']);
        },
        error: (err) => {
          console.error('Lỗi khi xóa sản phẩm:', err);
          alert('Có lỗi xảy ra khi xóa!');
        }
      });
    }
  }
}


  generateBarcode() {
    if (this.product) {
      this.product.barcode = Math.floor(Math.random() * 9000000000000 + 1000000000000).toString();
    }
  }
  uploadImage() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e: any) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev: any) => {
        if (this.product) {
          this.product.imageUrl = ev.target.result; // demo: gán trực tiếp Base64
          // thực tế: bạn nên upload lên Firebase Storage rồi lấy URL
        }
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}
}
