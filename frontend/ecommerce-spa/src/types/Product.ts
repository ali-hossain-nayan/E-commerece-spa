// FILE: src/types/Product.ts
export interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
}
