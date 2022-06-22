import { CurrencyDictionary } from "../constants/currency-dictionary.const";

export interface Product {
  allegroLocally: AllegroLocally;
  id: string;
  images: Image[];
  name: string;
  publication: Publication;
  seller: Seller;
  sellingMode: SellingMode;
  shipping: Shipping;
  view: View;
}

export interface AllegroLocally {
  location: Location;
}

export interface Location {
  label: string;
}

export interface Image {
  alt: string;
  url: string;
}

export interface Publication {
  endingAt: string;
  startingAt: string;
}

export interface Seller {
  id: string;
}

export interface SellingMode {
  buyNow: BuyNow;
  cart: Cart;
}

export interface BuyNow {
  active: boolean;
  price: Price;
}

export interface Price {
  sale: Sale;
}

export interface Sale {
  amount: string;
  currency: keyof typeof CurrencyDictionary;
}

export interface Cart {
  active: boolean;
}

export interface Shipping {
  priceWithDeliveryLabel: string;
}

export interface View {
  type: string;
  url: string;
}
