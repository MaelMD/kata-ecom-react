import { Product } from '../types/Product';

const API_URL = 'https://fakestoreapi.com/products';


export const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Products could not be fetched');
    }
    return response.json();
  },

  async getProductById(id: number): Promise<Product> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Product could not be fetched');
    }
    return response.json();
  }
};
