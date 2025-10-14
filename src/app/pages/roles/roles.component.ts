import { Component } from '@angular/core';
import { SimilarRole } from './similar-role-da/similar-role-da.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  constructor(private router: Router) {}
  similarRoles: SimilarRole[] = [
      {
        id: 'data-scientist',
        title: 'Data Scientist',
        description: 'A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and visualization to inform business strategies.',
        imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2okXQwMsMaDLsff3uh3uUz/c619cf8860813538a005dbea25425df5/Data_Scientist-role-card_2x.png?auto=format%2Ccompress&dpr=2&w=430',
        backgroundColor: '#FFA500',
        responsibilities: 'analyzing complex datasets, developing machine learning models, solving statistical problems',
        certifications: [
          {
            id: '1',
            provider: 'IBM',
            name: 'IBM Data Science',
            logo: 'https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png'
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
            logo: 'https://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png'
          }
        ]
      },
      {
        id: 'bi-analyst',
        title: 'Business Intelligence Analyst',
        description: 'A Business Intelligence analyst analyzes and visualizes data to support business decisions, using Tableau and Power BI to drive strategy.',
        imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6avnH5aIWbiAX2JCI3PeaG/ab20caf9ec9832ad7548eb226a9c3355/Business_Intelligence_Analyst-role-card_2x.png?auto=format%2Ccompress&dpr=2&w=430',
        backgroundColor: '#FFA500',
        responsibilities: 'interpreting data to support decision-making, creating dashboards and reports, identifying business trends',
        certifications: [
          {
            id: '1',
            provider: 'Google',
            name: 'Google Business Intelligence',
            logo: 'https://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png'
          },
          {
            id: '2',
            provider: 'Microsoft',
            name: 'Microsoft Power BI Data Analyst',
            logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1'
          },
          {
            id: '3',
            provider: 'Tableau',
            name: 'Tableau Business Intelligence Analyst',
            logo: 'https://www.tableau.com/themes/custom/tableau_www/logo.v2.svg'
          },
          {
            id: '4',
            provider: 'IBM',
            name: 'IBM Business Intelligence Analyst',
            logo: 'https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png'
          }
        ]
      },
      {
        id: 'business-analyst',
        title: 'Business Analyst (General)',
        description: 'A Business Analyst analyzes data and processes to identify business needs, providing insights to optimize operations and support strategic decisions.',
        imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/jmD7vPI1cXvRnIypBB3Jy/6c4281b693792ca74cb90dc17cb267c7/Data_Architect-role-card_1X.png?auto=format%2Ccompress&dpr=2&w=430',
        backgroundColor: '#8B5CF6',
        responsibilities: 'analyzing data to improve business processes, solving organizational problems, creating reports',
        certifications: [
          {
            id: '1',
            provider: 'Microsoft',
            name: 'Microsoft Business Analyst',
            logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1'
          },
          {
            id: '2',
            provider: 'IBM',
            name: 'IBM Business Analyst',
            logo: 'https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png'
          }
        ]
      },
      {
        id: 'data-architect',
        title: 'Data Architect',
        description: 'A Data Architect designs and oversees data systems, ensuring efficient storage, security, and accessibility to support business objectives.',
        imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/46OgHJ65ZWBXNnO50rD8iO/ee2581ca4137242403a294e4e7da569c/Business_Analyst-role-card_2x.png?auto=format%2Ccompress&dpr=2&w=430',
        backgroundColor: '#FFA500',
        responsibilities: 'designing how data is stored and accessed, creating data models, ensuring data quality',
        certifications: [
          {
            id: '1',
            provider: 'Meta',
            name: 'Meta Database Engineer',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtdzKPDmF4BYfI0WCuTY416jnhZiJeAK-rg&s'
          },
          {
            id: '2',
            provider: 'IBM',
            name: 'IBM Data Architecture',
            logo: 'https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png'
          },
          {
            id: '3',
            provider: 'Microsoft',
            name: 'Microsoft Azure Data Engineer',
            logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1'
          }
        ]
      }
    ];
}
