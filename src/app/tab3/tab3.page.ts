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
  constructor() { }
  stringInput: string;
  regInput: string;
  flagInput: string;
  match: any;
  chars: object = [];
  matchedAmount: number = 0;
  cursorPosition: number;

  indexArray = [];
  outputArray = <HTMLElement><unknown>document.getElementsByClassName("char");

  symbolClicked(symbol: string) {
    if (this.regInput === undefined) {
      this.regInput = symbol;
    } else {
      let start = this.regInput.substring(0, this.cursorPosition);
      let end = this.regInput.substring(this.cursorPosition, this.regInput.length);
      this.regInput = start + symbol + end;

      this.cursorPosition += 1
    }
    this.checkRegex();
  }



  globalMatchTest(str: string, reg: string, flag: string) {
    let matchedArray = [];
    let beginAndEnd = []
    let match: RegExpExecArray;
    const test = new RegExp(reg, flag);

    if (reg.length > 0) {
      while ((match = test.exec(str)) !== null) {
        beginAndEnd.push([match.index, match.index + match[0].length]);
      }
    }
    beginAndEnd.forEach(x => {
      for (let i = x[0]; i < x[1]; i++) {
        matchedArray.push(i)
      }
    })

    this.matchedAmount = beginAndEnd.length;
    this.regexMatched(matchedArray);
  }

  stringTyped() {
    this.chars = this.stringInput.split('');
    if (this.regInput !== undefined) {
      this.checkRegex();
    }
  }
  getCusorPostion(e) {
    console.log(e.key)
    if(e.key === undefined) {
    this.cursorPosition = e.target.selectionStart;
    }else{
    this.cursorPosition = e.target.selectionStart;
    console.log(this.cursorPosition)
    }
  }

  checkRegex() {
    let global: boolean = false

    if (this.flagInput !== undefined) {
      global = this.flagInput.split('').includes('g')
    }
    if (global && this.stringInput.length > 0) {
      this.globalMatchTest(this.stringInput, this.regInput, this.flagInput);
    } else {
      this.matchTest(this.stringInput, this.regInput, this.flagInput);
    }

  }

  matchTest(str: string, reg: string, flag: string) {
    const matchedArray = [];
    let test: RegExp = new RegExp(reg, flag);
    

    

    if (test.test(str)) {
      const match: number = str.match(test)[0].length;
      const position: number = str.match(test).index;
      for (let i = position; i < position + match; i++) {
        matchedArray.push(i);
      }
    }
    this.matchedAmount = matchedArray.length;
    this.regexMatched(matchedArray);

  }


  regexMatched(arr: any[]) {
    if(this.stringInput !== undefined && this.stringInput.length > 0) {
      const charArray = new Array(this.stringInput.length)
      .fill(0)
      .map((x, i) => (x = i));
    
    charArray.forEach(pos => {
      if (arr.includes(pos) && this.regInput.length > 0) {
        this.outputArray[pos].style.backgroundColor = "#900C3F";
        this.outputArray[pos].style.color = "#fff";
      } else {
        this.outputArray[pos].style.backgroundColor = "#fff";
        this.outputArray[pos].style.color = "#000";
      }
    });
  }
  }
}
