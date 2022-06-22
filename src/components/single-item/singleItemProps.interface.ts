import { CurrencyDictionary } from "../../constants/currency-dictionary.const";

export interface SingleItemProps {
  imagePath: string;
  name: string;
  buyNowActive: boolean;
  buyNowPrice: string;
  currency: keyof typeof CurrencyDictionary;
  location: string;
}
