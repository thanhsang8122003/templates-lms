import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/service/product.service';
import { Product } from '../../../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];   // bây giờ product đã có categoryName và unitName
  searchKeyword: string = '';
  useApi = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductsWithDetails().subscribe(data => {
      console.log("Products with details:", data);
      this.products = data;
    });
  }

  gotoEdit(productId: string) {
    this.router.navigate(['/products/edit', productId]);
  }

  onSearch() {
    const keyword = this.searchKeyword.trim().toLowerCase();

    if (!keyword) {
      this.productService.getProductsWithDetails().subscribe(data => this.products = data);
    } else {
      this.products = this.products.filter(p =>
        p.name.toLowerCase().includes(keyword) ||
        p.barcode?.toLowerCase().includes(keyword)
      );
    }
  }
    // Hàm load sản phẩm
  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  // Toggle chuyển đổi
  toggleSource() {
    this.useApi = !this.useApi; // đảo trạng thái
    this.productService.switchMode(this.useApi); // cập nhật mode cho service
    this.loadProducts(); // load lại dữ liệu theo nguồn mới
  }
}
