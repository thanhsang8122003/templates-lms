import { Injectable } from '@angular/core';

// Import tạm các component mẫu
import { Template1Component } from '../../component/template/template1/template1.component';
import { Template2Component } from '../../component/template/template2/template2.component';

@Injectable({ providedIn: 'root' })
export class TemplateRegistryService {
    private templates: Record<string, any> = {
        template1: Template1Component,
        template2: Template2Component,
    };

    // Trả về component tương ứng tên template
    getTemplateComponent(templateName: string): any {
        return this.templates[templateName] || Template1Component;
    }

    // Cho phép đăng ký thêm template động
    registerTemplate(name: string, component: any): void {
        this.templates[name] = component;
    }

    // Lấy danh sách template có sẵn (để hiển thị chọn)
    getAvailableTemplates(): string[] {
        return Object.keys(this.templates);
    }
}
