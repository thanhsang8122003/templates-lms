export interface Product {
    id?: string;
    name: string;
    brand: string;
    price: number;
    alertQuantity: number;
    unitId: string;  // Sửa từ string thành array
    categoryId: string;
    barcode: string;
    imageUrl: string;
    sellingPrice: number;
    wholesalePrice: number;
    retailPrice: number;
    allowSell: false;
    fastSell: false;
    location?: string;
}