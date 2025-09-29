import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, map, from } from 'rxjs';
import { Product } from '../models/product.model';
import { Unit } from '../models/unit.model';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productCollection = this.afs.collection<Product>('products');
  private unitCollection = this.afs.collection<Unit>('unit');
  private categoryCollection = this.afs.collection<Category>('category');

  private useApi = false; // false = Firebase, true = API NestJS

  // API endpoints
  private apiUrl = 'http://localhost:3000/products';
  private apiUnitUrl = 'http://localhost:3000/unit';
  private apiCategoryUrl = 'http://localhost:3000/category';

  constructor(private afs: AngularFirestore, private http: HttpClient) {}

  /** ------------------- PRODUCTS ------------------- **/

  getProducts(): Observable<Product[]> {
    if (this.useApi) {
      return this.http.get<Product[]>(this.apiUrl);
    } else {
      return this.productCollection.valueChanges({ idField: 'id' });
    }
  }

  getProductById(id: string): Observable<Product | undefined> {
    if (this.useApi) {
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
    } else {
      return this.afs.doc<Product>(`products/${id}`).valueChanges({ idField: 'id' });
    }
  }

  addProduct(product: Product): Observable<any> {
    if (this.useApi) {
      return this.http.post<Product>(this.apiUrl, product);
    } else {
      return from(this.productCollection.add(product)); // Promise -> Observable
    }
  }

  updateProduct(id: string, data: Partial<Product>): Observable<any> {
    if (this.useApi) {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    } else {
      return from(this.productCollection.doc(id).update(data));
    }
  }

  deleteProduct(id: string): Observable<any> {
    if (this.useApi) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    } else {
      return from(this.productCollection.doc(id).delete());
    }
  }

  /** ------------------- UNITS ------------------- **/
  getUnits(): Observable<Unit[]> {
    if (this.useApi) {
      return this.http.get<Unit[]>(this.apiUnitUrl);
    } else {
      return this.unitCollection.valueChanges({ idField: 'id' });
    }
  }

  /** ------------------- CATEGORIES ------------------- **/
  getCategories(): Observable<Category[]> {
    if (this.useApi) {
      return this.http.get<Category[]>(this.apiCategoryUrl);
    } else {
      return this.categoryCollection.valueChanges({ idField: 'id' });
    }
  }

  /** ------------------- JOIN PRODUCTS WITH UNIT + CATEGORY ------------------- **/
  getProductsWithDetails(): Observable<any[]> {
    return combineLatest([
      this.getProducts(),
      this.getCategories(),
      this.getUnits()
    ]).pipe(
      map(([products, categories, units]) =>
        products.map(product => {
          const category = categories.find(c => c.id === product.categoryId);
          const unit = units.find(u => u.id === product.unitId);
          return {
            ...product,
            categoryName: category ? category.name : 'Chưa có danh mục',
            unitName: unit ? unit.name : 'Chưa có đơn vị'
          };
        })
      )
    );
  }

  /** ------------------- SWITCH MODE ------------------- **/
  switchMode(useApi: boolean) {
    this.useApi = useApi;
  }
}
