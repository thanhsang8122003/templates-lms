import { Component } from '@angular/core';

interface DropdownSection {
  title: string
  links: string[]
}

interface DropdownColumn {
  sections: DropdownSection[]
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showDropdown = false

  dropdownColumns: DropdownColumn[] = [
    {
      sections: [
        {
          title: "Khám phá vai trò",
          links: [
            "Nhà phân tích dữ liệu",
            "Quản lý dự án",
            "Nhà phân tích An ninh Mạng",
            "Nhà khoa học dữ liệu",
            "Chuyên viên Phân tích Kinh doanh Thông minh",
            "Chuyên gia tiếp thị kỹ thuật số",
            "Trình thiết kế giao diện người dùng/UX",
            "Kỹ sư học máy",
            "Chuyên gia truyền thông xã hội",
            "Chuyên gia Hỗ trợ Máy tính",
            "Xem tất cả",
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Khám phá danh mục",
          links: [
            "Kinh doanh",
            "Khoa học máy tính",
            "Công nghệ thông tin",
            "Khoa học máy tính",
            "Chăm sóc sức khỏe",
            "Khoa học vật lý và kỹ thuật",
            "Phát triển cá nhân",
            "Khoa học Xã hội",
            "Học ngôn ngữ",
            "Nghệ thuật và Nhân văn",
            "Xem tất cả",
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Nhận Chứng chỉ Chuyên môn",
          links: ["Kinh doanh", "Khoa học máy tính", "Khoa học dữ liệu", "Công nghệ thông tin", "Xem tất cả"],
        },
        {
          title: "Nhận bằng trực tuyến",
          links: ["Bằng cử nhân", "Bằng thạc sĩ", "Chương trình sau đại học", "Xem tất cả"],
        },
      ],
    },
    {
      sections: [
        {
          title: "Khám phá các kỹ năng thịnh hành",
          links: ["Python", "Trí tuệ nhân tạo", "Excel", "Học máy", "SQL", "Quản lý dự án", "Power BI", "Tiếp thị"],
        },
        {
          title: "Chuẩn bị cho bài thi chứng chỉ",
          links: ["Xem tất cả"],
        },
      ],
    },
  ]
  
  onMouseEnter(): void {
    this.showDropdown = true
  }

  onMouseLeave(): void {
    this.showDropdown = false
  }
}
