import { Injectable } from "@angular/core";
import { OptionsResponse } from "./models/options-response.model";
@Injectable({ providedIn: "root" })
export class CurrencyQuantityService {
  
  calculate(inputCurrency: number, options: number[]): OptionsResponse[] {
    let cur = [];
    options.forEach(option => {
      if (inputCurrency >= option) {
        cur.push({
          currency: option,
          quantity: Math.floor(inputCurrency / option)
        });
        inputCurrency = inputCurrency % option;
      }
    });
    return cur;
  }
}
