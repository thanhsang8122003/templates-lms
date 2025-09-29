import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageConfigService {
  private pageConfig: any = {
    'trang-chu': { header: '1', banner: '1', courses: '1', footer: '1' },
    'khai-giang': { header: '1', banner: '1', courses: '1', footer: '1' }
  };

  private selectedPage: string = 'trang-chu';

  constructor() {}

  // Trả về Observable
  getPageConfig(): Observable<any> {
    return of(this.pageConfig);
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }

  selectComponent(page: string, type: string, variant: string) {
    if (!this.pageConfig[page]) this.pageConfig[page] = {};
    this.pageConfig[page][type] = variant;
  }

  resetPage() {
    // Reset toàn bộ config về mặc định
    this.pageConfig = {
      'trang-chu': { header: '1', banner: '1', courses: '1', footer: '1' },
      'khai-giang': { header: '1', banner: '1', courses: '1', footer: '1' }
    };
    this.selectedPage = 'trang-chu';
  }
}
