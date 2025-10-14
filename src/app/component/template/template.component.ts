import { Component } from '@angular/core';
import { TemplateRegistryService } from '../../core/service/template.service';
// import { TemplateSelectorPipe } from '../../core/pipes/template-selector.pipe';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  selectedTemplateName = 'template1';
  availableTemplates: string[];

  constructor(private templateRegistry: TemplateRegistryService) {
    this.availableTemplates = this.templateRegistry.getAvailableTemplates();
  }
}
