import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  stringInput: string;
  regInput: string;
  flagInput: string;
  replaceWith: string;
  match: any;
  chars: any = [];
  matchedAmount: number = 0;
  regexType: string = "match";
  onReplace: boolean = false;
  onMatch: boolean = true;
  indexArray = [];
  cursorPosition: number = 0;
  //outputArray  = <HTMLElement>(<unknown>document.getElementsByClassName("char"));
  outputArray = document.getElementsByClassName("char");

  symbols: object = [
    ".",
    "+",
    "^",
    "$",
    "*",
    "?",
    "-",
    "_",
    "\\",
    "/",
    "|",
    "[",
    "]",
    "{",
    "}",
    "(",
    ")"
  ];
  constructor() {}

  @ViewChild("inputRef", { static: false }) inputRef: ElementRef;

  resetPosition() {
    this.cursorPosition = 0;
  }

  symbolClicked(symbol: string) {
    if (this.cursorPosition === 0) {
      this.cursorPosition = this.inputRef.nativeElement.selectionStart;
    }

    if (this.regInput === undefined) {
      this.regInput = symbol;
    } else {
      let start = this.regInput.substring(0, this.cursorPosition);
      let end = this.regInput.substring(
        this.cursorPosition,
        this.regInput.length
      );
      this.regInput = start + symbol + end;

      this.cursorPosition += 1;
    }
    this.checkRegex();
  }

  globalMatchTest(str: string, reg: string, flag: string) {
    let matchedArray = [];
    let beginAndEnd = [];
    let bracketTest = /\[(?!.*\])/.test(reg);
    let match: RegExpExecArray;

    if (reg.length > 0 && reg[reg.length - 1] !== "|" && !bracketTest) {
      const test = new RegExp(reg, flag);
      while ((match = test.exec(str)) !== null) {
        beginAndEnd.push([match.index, match.index + match[0].length]);
      }
    }

    beginAndEnd.forEach(x => {
      for (let i = x[0]; i < x[1]; i++) {
        matchedArray.push(i);
      }
    });

    this.matchedAmount = beginAndEnd.length;

    this.regexMatched(matchedArray);
  }

  stringTyped() {
    this.chars = this.stringInput.split("");

    this.checkRegex();
  }

  segmentChanged(e) {
    this.regInput = "";
    this.chars = [];
    this.flagInput = "";
    this.stringInput = "";
    this.matchedAmount = 0;
    this.replaceWith = "";
    if (e.detail.value == "match") {
      this.onMatch = true;
      this.onReplace = false;
    } else {
      this.onMatch = false;
      this.onReplace = true;
    }
  }

  checkRegex() {
    if (this.onMatch) {
      let global: boolean = false;

      if (this.flagInput !== undefined) {
        global = this.flagInput.split("").includes("g");
      }
      if (global && this.stringInput.length > 0) {
        this.globalMatchTest(this.stringInput, this.regInput, this.flagInput);
      } else {
        this.matchTest(this.stringInput, this.regInput, this.flagInput);
      }
    } else {
      this.replaceRegex(
        this.stringInput,
        this.regInput,
        this.flagInput,
        this.replaceWith
      );
    }
  }
  test() {
    console.log(this.outputArray);
  }

  replaceRegex(str: string, reg: string, flag: string, replaceWith: string) {
    let replacing: RegExp = new RegExp(reg, flag);

    let rep = str.replace(replacing, replaceWith);
    if (reg.length > 0) {
      this.chars = rep.split("");
    } else {
      this.chars = str.split("");
    }
  }
  matchTest(str: string, reg: string, flag: string) {
    const matchedArray = [];
    let bracketTest = /\[(?!.*\])/.test(reg);
    if (!bracketTest) {
      let test: RegExp = new RegExp(reg, flag);
      if (test.test(str)) {
        const match: number = str.match(test)[0].length;
        const position: number = str.match(test).index;
        for (let i = position; i < position + match; i++) {
          matchedArray.push(i);
        }
      }
    }

    this.matchedAmount = matchedArray.length;
    this.regexMatched(matchedArray);
  }

  regexMatched(arr: any[]) {
    setTimeout(() => {
      let eArr = this.outputArray[Symbol.iterator]();
      let i = 0;
      for (let elem of eArr) {
        if (arr.includes(i)) {
          elem.style.backgroundColor = "#900C3F";
          elem.style.color = "#fff";
        } else {
          elem.style.backgroundColor = "#fff";
          elem.style.color = "#000";
        }
        i++;
      }
    }, 100);
  }
}
