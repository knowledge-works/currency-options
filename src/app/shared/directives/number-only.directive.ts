import { Directive, HostListener } from "@angular/core";

@Directive({ selector: "[numberOnly]" })
export class NumberOnlyDirective {
  @HostListener("paste", ["$event"]) onPaste(event: KeyboardEvent) {
    return false;
  }

  @HostListener("keypress", ["$event"])
  onkeypress(event: KeyboardEvent) {
    let key = event.keyCode;
    return !(key > 31 && (key < 48 || key > 57));
  }
}
