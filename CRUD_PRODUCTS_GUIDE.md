# 📋 Hướng dẫn sử dụng hệ thống CRUD Products

## 🎯 Tổng quan

Hệ thống CRUD Products đã được implement đầy đủ với các tính năng:
- ✅ **CREATE**: Thêm sản phẩm mới
- ✅ **READ**: Xem danh sách sản phẩm với tìm kiếm và lọc
- ✅ **UPDATE**: Sửa thông tin sản phẩm
- ✅ **DELETE**: Xóa sản phẩm

## 🏗️ Kiến trúc hệ thống

### 1. **ProductService** (`src/app/service/product.service.ts`)
```typescript
// Các method CRUD chính:
- addProduct(product: IProduct)           // Tạo sản phẩm mới
- getProducts(): Observable<IProduct[]>   // Lấy danh sách sản phẩm
- updateProduct(product: IProduct)        // Cập nhật sản phẩm
- deleteProduct(id: string)              // Xóa sản phẩm
```

### 2. **Product Model** (`src/app/models/product.model.ts`)
```typescript
interface IProduct {
  id?: string;
  name: string;                    // Tên sản phẩm
  brand: string;                   // Thương hiệu
  category?: string;               // Danh mục
  location: string;                // Vị trí để hàng
  importPrice: number;             // Giá nhập
  sellingPrice: number;            // Giá bán buôn
  retailPrice: number;             // Giá bán lẻ
  unit: string;                    // Đơn vị
  barcode: string;                 // Mã vạch
  inventory: number;               // Số lượng tồn kho
  imageUrl?: string;               // URL hình ảnh
  isActive?: boolean;              // Trạng thái hoạt động
  allowSell?: boolean;             // Cho phép bán
  quickSell?: boolean;             // Bán nhanh
  sellByBatch?: boolean;           // Bán theo lô
  lowStockThreshold?: number;      // Ngưỡng cảnh báo hết hàng
  createdAt?: Date;                // Ngày tạo
  updatedAt?: Date;                // Ngày cập nhật
}
```

## 🚀 Cách sử dụng

### **1. Xem danh sách sản phẩm (HomeComponent)**
- **URL**: `/` (trang chủ)
- **Tính năng**:
  - Hiển thị danh sách sản phẩm trong bảng
  - Tìm kiếm theo tên, thương hiệu, barcode
  - Lọc theo danh mục/thương hiệu
  - Sắp xếp và phân trang
  - Cảnh báo sản phẩm sắp hết hàng
  - Thao tác: Sửa, Xóa, Xuất dữ liệu

### **2. Thêm sản phẩm mới (ProductsComponent)**
- **URL**: `/products`
- **Tính năng**:
  - Form nhập thông tin đầy đủ
  - Upload hình ảnh sản phẩm
  - Validation form real-time
  - Lưu vào Firebase Firestore
  - Tự động chuyển về trang chủ sau khi lưu

### **3. Sửa sản phẩm (ProductsComponent)**
- **URL**: `/products/edit/:id`
- **Tính năng**:
  - Load dữ liệu sản phẩm hiện tại
  - Form pre-filled với thông tin cũ
  - Cập nhật thông tin
  - Lưu thay đổi vào Firebase

## 🔧 Các tính năng chi tiết

### **Form Validation**
- ✅ Required fields validation
- ✅ Min length validation
- ✅ Min value validation
- ✅ Real-time error display
- ✅ Form state management

### **Image Upload**
- ✅ Drag & drop upload
- ✅ Image preview
- ✅ Remove image option
- ✅ File type validation

### **Search & Filter**
- ✅ Search by name, brand, barcode
- ✅ Filter by category/brand
- ✅ Real-time filtering
- ✅ Clear search functionality

### **User Experience**
- ✅ Loading states
- ✅ Error handling
- ✅ Success messages
- ✅ Confirmation dialogs
- ✅ Responsive design
- ✅ Empty states

## 📱 Responsive Design

- **Desktop**: Layout 2 cột với sidebar hình ảnh
- **Tablet**: Layout stack với form full width
- **Mobile**: Single column layout với form tối ưu

## 🎨 UI Components

- **Ant Design (ng-zorro)**: Table, Form, Input, Select, Button, Alert
- **Angular Material**: Form controls, Validation
- **Custom SCSS**: Styling và responsive design

## 🔥 Firebase Integration

- **Firestore**: Lưu trữ dữ liệu sản phẩm
- **Real-time updates**: Tự động cập nhật khi có thay đổi
- **Error handling**: Xử lý lỗi kết nối và validation

## 🚨 Lưu ý quan trọng

1. **Firebase Configuration**: Đảm bảo `environment.ts` có cấu hình Firebase đúng
2. **Form Validation**: Tất cả field bắt buộc phải được điền đầy đủ
3. **Image Upload**: Hiện tại lưu dưới dạng base64, có thể nâng cấp lên Firebase Storage
4. **Error Handling**: Hệ thống có xử lý lỗi cơ bản, có thể mở rộng thêm

## 🔄 Workflow sử dụng

1. **Truy cập trang chủ** → Xem danh sách sản phẩm
2. **Click "Thêm sản phẩm"** → Điền form → Lưu
3. **Click "Sửa"** trên sản phẩm → Chỉnh sửa → Cập nhật
4. **Click "Xóa"** → Xác nhận → Xóa sản phẩm
5. **Sử dụng tìm kiếm** → Lọc kết quả theo nhu cầu

## 🎯 Kết luận

Hệ thống CRUD Products đã được implement hoàn chỉnh với:
- ✅ Full CRUD operations
- ✅ Form validation
- ✅ Image upload
- ✅ Search & filter
- ✅ Responsive design
- ✅ Error handling
- ✅ User feedback

Sẵn sàng để sử dụng trong production! 🚀
