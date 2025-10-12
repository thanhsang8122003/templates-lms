import { Component } from '@angular/core';
import { SimilarRole } from './similar-role-da/similar-role-da.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  similarRoles: SimilarRole[] = [
      {
        id: 'data-scientist',
        title: 'Data Scientist',
        description: 'A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and visualization to inform business strategies.',
        imageUrl: 'assets/images/data-scientist.jpg',
        backgroundColor: '#FFA500',
        iconType: 'lightning',
        responsibilities: 'analyzing complex datasets, developing machine learning models, solving statistical problems',
        certifications: [
          {
            id: '1',
            provider: 'IBM',
            name: 'IBM Data Science',
            logo: 'assets/logos/ibm-icon.png'
          },
          {
            id: '2',
            provider: '',
            name: 'Advanced Statistics for Data Science',
            logo: ''
          },
          {
            id: '3',
            provider: 'Google',
            name: 'Google Advanced Data Analytics',
            logo: 'assets/logos/google-icon.png'
          }
        ]
      },
      {
        id: 'bi-analyst',
        title: 'Business Intelligence Analyst',
        description: 'A Business Intelligence analyst analyzes and visualizes data to support business decisions, using Tableau and Power BI to drive strategy.',
        imageUrl: 'assets/images/bi-analyst.jpg',
        backgroundColor: '#FFA500',
        iconType: 'chart',
        responsibilities: 'interpreting data to support decision-making, creating dashboards and reports, identifying business trends',
        certifications: [
          {
            id: '1',
            provider: 'Google',
            name: 'Google Business Intelligence',
            logo: 'assets/logos/google-icon.png'
          },
          {
            id: '2',
            provider: 'Microsoft',
            name: 'Microsoft Power BI Data Analyst',
            logo: 'assets/logos/microsoft-icon.png'
          },
          {
            id: '3',
            provider: 'Tableau',
            name: 'Tableau Business Intelligence Analyst',
            logo: 'assets/logos/tableau-icon.png'
          },
          {
            id: '4',
            provider: 'IBM',
            name: 'IBM Business Intelligence Analyst',
            logo: 'assets/logos/ibm-icon.png'
          }
        ]
      },
      {
        id: 'business-analyst',
        title: 'Business Analyst (General)',
        description: 'A Business Analyst analyzes data and processes to identify business needs, providing insights to optimize operations and support strategic decisions.',
        imageUrl: 'assets/images/business-analyst.jpg',
        backgroundColor: '#8B5CF6',
        iconType: 'pie',
        responsibilities: 'analyzing data to improve business processes, solving organizational problems, creating reports',
        certifications: [
          {
            id: '1',
            provider: 'Microsoft',
            name: 'Microsoft Business Analyst',
            logo: 'assets/logos/microsoft-icon.png'
          },
          {
            id: '2',
            provider: 'IBM',
            name: 'IBM Business Analyst',
            logo: 'assets/logos/ibm-icon.png'
          }
        ]
      },
      {
        id: 'data-architect',
        title: 'Data Architect',
        description: 'A Data Architect designs and oversees data systems, ensuring efficient storage, security, and accessibility to support business objectives.',
        imageUrl: 'assets/images/data-architect.jpg',
        backgroundColor: '#FFA500',
        iconType: 'network',
        responsibilities: 'designing how data is stored and accessed, creating data models, ensuring data quality',
        certifications: [
          {
            id: '1',
            provider: 'Meta',
            name: 'Meta Database Engineer',
            logo: 'assets/logos/meta-icon.png'
          },
          {
            id: '2',
            provider: 'IBM',
            name: 'IBM Data Architecture',
            logo: 'assets/logos/ibm-icon.png'
          },
          {
            id: '3',
            provider: 'Microsoft',
            name: 'Microsoft Azure Data Engineer',
            logo: 'assets/logos/microsoft-icon.png'
          }
        ]
      }
    ];
}
