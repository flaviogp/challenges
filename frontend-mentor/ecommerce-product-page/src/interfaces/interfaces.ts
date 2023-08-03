export interface IProductImage{
    id: number;
    imageUrl: string;
    imageThumbnailUrl: string;
}

export interface IData{
    id: number;
    productName: string;
    productDescription: string;
    productPrice: number;
    productDiscount: number;
    productImages: IProductImage[]
}

export interface IProduct{
    productName: string;
    price: number;
    amount:number;
    id: number;
  }
  