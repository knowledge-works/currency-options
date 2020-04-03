import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CurrencyModel } from "./currency.model";

@Component({
  selector: "currency-form",
  templateUrl: "./currency-form.component.html"
})
export class CurrencyFormComponent {
  data: CurrencyModel = {
    gender: "",
    amount: ""
  };
  
  @Output() sendObj: EventEmitter<CurrencyModel> = new EventEmitter();

  calculate() {
    this.sendObj.emit(this.data);
  }
}
