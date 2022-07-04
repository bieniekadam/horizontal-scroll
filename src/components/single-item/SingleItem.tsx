import React from "react";
import { CurrencyDictionary } from "../../constants/currency-dictionary.const";
import "./SingleItem.css";
import { SingleItemProps } from "./singleItemProps.interface";

export function SingleItem(props: SingleItemProps) {
  const currencyDictionary = CurrencyDictionary;

  return (
    <div className="whole-product-wrapper">
      <img className="product-photo" src={props.imagePath}></img>

      <div className="favorite-icon">
        <img src="favorite-icon.svg"></img>
      </div>

      <div className="product-description">
        <div className="product-name">{props.name}</div>
        <div className="product-price">
          <div className="product-price-amount">
            {props.buyNowPrice ? props.buyNowPrice + " " : "price unavailible"}
          </div>
          <div className="product-price-currency">
            {currencyDictionary[props.currency]}
          </div>
        </div>
        <div className="buy-now-symbol">
          {props.buyNowActive ? "KUP TERAZ" : ""}
        </div>
        <div className="location">
          <img src="pin-icon.svg"></img>
          {props.location}
        </div>
      </div>
    </div>
  );
}
