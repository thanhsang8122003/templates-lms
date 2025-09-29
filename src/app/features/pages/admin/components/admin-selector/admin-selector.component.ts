import { Component, OnInit } from '@angular/core';
import { PageConfigService } from './../../page-config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-selector',
  templateUrl: './admin-selector.component.html',
  styleUrls: ['./admin-selector.component.scss']
})
export class AdminSelectorComponent implements OnInit {
  pageConfig$: Observable<any>;
  selectedPage: string = 'trang-chu'; // Default page
  isHeaderOpen: boolean = false; // Trạng thái mở dropdown Header

  constructor(private pageConfigService: PageConfigService) {
    this.pageConfig$ = this.pageConfigService.getPageConfig(); // ✅ Observable
  }

  ngOnInit(): void {
    this.pageConfig$.subscribe(config => {
      this.selectedPage = Object.keys(config).find(key => config[key]) || 'trang-chu';
    });
  }

  selectPage(page: string) {
    this.selectedPage = page;
    this.pageConfigService.selectPage(page);
    // Chọn các thành phần mặc định khi đổi trang
    this.pageConfigService.selectComponent(page, 'header', '1');
    this.pageConfigService.selectComponent(page, 'banner', '1');
    this.pageConfigService.selectComponent(page, 'courses', '1');
    this.pageConfigService.selectComponent(page, 'footer', '1');
  }

  selectComponent(page: string, type: string, variant: string) {
    this.pageConfigService.selectComponent(page, type, variant);
    this.selectedPage = page;
  }

  toggleHeaderDropdown() {
    this.isHeaderOpen = !this.isHeaderOpen;
  }
}
