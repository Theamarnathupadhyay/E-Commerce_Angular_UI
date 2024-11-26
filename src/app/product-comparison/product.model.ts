export interface Product {
  title: any;
  thumbnail: any;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  features: string[];
  rating?: number;
  reviewsCount?: number;
  availability?: string;
}
