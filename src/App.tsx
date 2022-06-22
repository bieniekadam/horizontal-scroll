import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { SingleItem } from "./components/single-item/SingleItem";
import { Product } from "./interfaces/product.interface";
import { AllegroApiUrl } from "./constants/api-url.const";
import { AllegroResponse } from "./types/allegro-response.type";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const carouselWrapper = document.getElementById("offer-carousel-wrapper");

  const scrollRight = () => {
    return carouselWrapper?.scrollBy(792, 0);
  };

  const scrollLeft = () => {
    return carouselWrapper?.scrollBy(-792, 0);
  };

  useEffect(() => {
    axios
      .get(AllegroApiUrl)
      .then((response: AxiosResponse<AllegroResponse>) => {
        setProducts(response.data.offers);
      });
  }, []);

  return (
    <div className="App">
      <div
        id="offer-carousel-wrapper"
        className="offer-carousel-wrapper disable-scrollbars"
      >
        <button onClick={scrollLeft} className="arrow-slider arrow-left">
          <img src="arrow-slider-left.svg"></img>
        </button>
        <button onClick={scrollRight} className="arrow-slider arrow-right">
          <img src="arrow-slider-right.svg"></img>
        </button>
        {products.map((item: Product) => (
          <SingleItem
            imagePath={item.images[0].url}
            name={item.name}
            buyNowPrice={item.sellingMode.buyNow?.price.sale.amount}
            currency={item.sellingMode.buyNow?.price.sale.currency}
            buyNowActive={item.sellingMode.buyNow?.active}
            location={item.allegroLocally.location.label}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
