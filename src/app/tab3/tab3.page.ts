import { Component, ElementRef, ViewChild } from "@angular/core";
import { resolve } from "url";
import { reject } from "q";

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
  onFlag: boolean = false;
  indexArray = [];
  caretPosition: number = 0;
  outputArray = [];
  symbolsPressed: number = 0;

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

  symbolClicked(symbol: string) {
   // this.inputRef.nativeElement.focus();
    this.caretPosition = this.inputRef.nativeElement.selectionStart;
    // alert(this.caretPosition)
    if (!this.regInput) {
      this.regInput = symbol;
    } else {
      const arr = this.regInput.split("");
      arr.splice(this.caretPosition, 0, symbol);
      this.regInput = arr.join("");
    }
    setTimeout(() => {
      this.setCaretPosition(
        this.inputRef.nativeElement,
        this.caretPosition + 1
      );
    }, 1);
    
  }

  testingFunction() {}

  test(e) {
    
   
  }

  removeHighlight() {
    console.log('REMOVE H')
    let characterArray = document.querySelectorAll(".char")[Symbol.iterator]();
    for (let elem of characterArray) {
      elem.style.backgroundColor = "#fff";
      elem.style.color = "#000"; 
   }
  }

  setCaretPosition(ctrl, pos) {
   
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);

      // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  flagTyped() {
    setTimeout(() => {
      this.checkRegex();
    }, 1);
  }

  stringTyped() {
    this.chars = this.stringInput.split("");
    setTimeout(() => {
      this.checkRegex();
    }, 1);
  }

  segmentChanged(e) {
    if (e.detail.value == "match") {
      this.onMatch = true;
      this.onReplace = false;
      this.stringTyped();
    } else {
      this.onMatch = false;
      this.onReplace = true;
      if (this.replaceWith === undefined) {
        this.replaceWith = "";
      }
      this.removeHighlight()
      this.checkRegex()
    }
  }

  checkRegex() {
    

    if (this.onMatch) {
      let global: boolean = false;

      if (this.flagInput !== undefined) {
        global = this.flagInput.includes("g");
      }

      if (global && this.stringInput) {
        this.globalMatchTest(
          this.stringInput,
          this.regInput,
          this.flagInput,
          this.characterHighlighter
        );
      } else {
        this.matchTest(
          this.stringInput,
          this.regInput,
          this.flagInput,
          this.characterHighlighter
        );
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

  replaceRegex(str: string, reg: string, flag: string, replaceWith: string) {
    let replacing: RegExp = new RegExp(reg, flag);
    let rep = str.replace(replacing, replaceWith);

    if (reg.length > 0) {
      this.chars = rep.split("");
    } else {
      this.chars = str.split("");
    }
 
  }

  matchTest(str: string, reg: string, flag: string, callback) {
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
    callback(matchedArray);
  }

  globalMatchTest(str: string, reg: string, flag: string, callback) {
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
    callback(matchedArray);
  }

  characterHighlighter(arr: any[]) {
    let characterArray = document.querySelectorAll(".char")[Symbol.iterator]();

    let i = 0;
    for (let elem of characterArray) {
      if (arr.includes(i)) {
        elem.style.backgroundColor = "#900C3F";
        elem.style.color = "#fff";
      } else {
        elem.style.backgroundColor = "#fff";
        elem.style.color = "#000";
      }
      i++;
    }
  }
}
