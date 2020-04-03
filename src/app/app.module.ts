import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CurrencyQuantityService } from "./shared/currency-quantity.service";
import { CurrencyFormComponent } from "./currency-form/currency-form.component";
import { NumberOnlyDirective } from "./shared/directives/number-only.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CurrencyFormComponent,
    NumberOnlyDirective
  ],
  providers: [CurrencyQuantityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
