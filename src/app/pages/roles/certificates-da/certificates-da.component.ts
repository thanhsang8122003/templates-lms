import { Component } from '@angular/core';

export interface Certificate {
  id: string;
  provider: string;
  providerLogo: string;
  title: string;
  skills: string[];
  rating: number;
  totalReviews: number;
  level: 'Sơ cấp' | 'Trung cấp' | 'Nâng cao';
  duration: string;
  modules: number;
  courseNumber: number;
  totalCourses: number;
}

@Component({
  selector: 'app-certificates-da',
  templateUrl: './certificates-da.component.html',
  styleUrls: ['./certificates-da.component.scss']
})
export class CertificatesDAComponent {
  levels = ['Sơ cấp', 'Trung cấp', 'Nâng cao'];
  selectedLevel: string | null = null;
  scrollPosition = 0;

  get filteredCertificates(): Certificate[] {
    if (!this.selectedLevel) {
      return this.certificates;
    }
    return this.certificates.filter(cert => cert.level === this.selectedLevel);
  }

  selectLevel(level: string) {
    this.selectedLevel = this.selectedLevel === level ? null : level;
  }

  scrollPrev() {
    this.scrollPosition = Math.max(0, this.scrollPosition - 1);
  }

  scrollNext() {
    this.scrollPosition = Math.min(
      this.certificates.length - 4,
      this.scrollPosition + 1
    );
  }
  certificates: Certificate[] = [
    {
      id: '1',
      provider: 'Google',
      providerLogo: 'https://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png',
      title: 'Chứng chỉ Chuyên môn Google Data Analytics',
      skills: [
        'Data Analysis',
        'Data Visualization Software',
        'Spreadsheet Software',
        'Data Cleansing',
        'Tableau Software',
        'Data Storytelling'
      ],
      rating: 4.8,
      totalReviews: 162002,
      level: 'Sơ cấp',
      duration: '6 tháng',
      modules: 9,
      courseNumber: 1,
      totalCourses: 9
    },
    {
      id: '2',
      provider: 'IBM',
      providerLogo: 'https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png',
      title: 'IBM Data Analyst Professional Certificate',
      skills: [
        'Python',
        'SQL',
        'Data Analysis',
        'Data Visualization',
        'Excel'
      ],
      rating: 4.6,
      totalReviews: 89543,
      level: 'Sơ cấp',
      duration: '8 tháng',
      modules: 11,
      courseNumber: 1,
      totalCourses: 11
    },
    {
      id: '3',
      provider: 'Microsoft',
      providerLogo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1',
      title: 'Microsoft Power BI Data Analyst',
      skills: [
        'Power BI',
        'DAX',
        'Data Modeling',
        'Data Visualization'
      ],
      rating: 4.7,
      totalReviews: 45678,
      level: 'Trung cấp',
      duration: '4 tháng',
      modules: 6,
      courseNumber: 1,
      totalCourses: 6
    },
  ];
}
