// template-selector.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Template1Component } from '../../component/template/template1/template1.component';
import { Template2Component } from '../../component/template/template2/template2.component';

@Pipe({ name: 'templateSelector' })
export class TemplateSelectorPipe implements PipeTransform {
  transform(templateName: string): any {
    const templates: { [key: string]: any } = {
      Template1: Template1Component,
      Template2: Template2Component,
    };
    return templates[templateName] || Template1Component; // mặc định Template1
  }
}
