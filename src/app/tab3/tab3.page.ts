import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  symbols: object = [
    "\\",
    "/",
    "[",
    "]",
    ".",
    "+",
    "^",
    "-",
    "$",
    "*",
    "_",
    "?",
    "{",
    "}",
    "(",
    ")"
  ];
  constructor() {}
  stringInput: string;
  regInput: string;
  flagInput: string;

  symbolClicked(symbol: string) {
    if(this.regInput === undefined) {
      this.regInput = symbol
    }else{
    this.regInput = this.regInput + symbol;
      
    }
  }

  regTester(string: string, reg: string, flag: string) {
    const test = new RegExp(reg, flag)
    return string.match(test)
  }

  test() {
  console.log(this.regTester(this.stringInput, this.regInput, this.flagInput))

  }

}
