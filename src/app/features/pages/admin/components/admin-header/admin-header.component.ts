import { Component } from '@angular/core';
import { PageConfigService } from './../../page-config.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  isMobileMenuOpen: boolean = false;

  constructor(private pageConfigService: PageConfigService) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  resetPage() {
    this.pageConfigService.resetPage();
  }

  previewFullscreen() {
    // Logic preview toàn màn hình
  }

  savePage() {
    // Logic lưu & xuất
  }
  

  selectPage(page: string) {
    this.pageConfigService.selectPage(page);
    this.isMobileMenuOpen = false; // Đóng menu sau khi chọn
  }
}
