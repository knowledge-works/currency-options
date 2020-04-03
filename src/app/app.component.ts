import { Component } from "@angular/core";
import { CurrencyQuantityService } from "./shared/currency-quantity.service";
import { CurrencyModel } from "./currency-form/currency.model";
import { OptionsResponse } from "./shared/models/options-response.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  message: string;
  options = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  availableOptions = new Array<OptionsResponse>();

  constructor(private currencyQuantityService: CurrencyQuantityService) {}

  trackByFn(index, item) {
    return item.currency;
  }

  calculateCurrency(data: CurrencyModel) {
    this.message = data.gender;
    this.availableOptions = this.currencyQuantityService.calculate(
      data.amount,
      this.options
    );
  }
}
