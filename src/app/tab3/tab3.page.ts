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
  match: any;
  chars = [];
  
  indexArray = [];
  outputArray = document.getElementsByClassName("char");

  symbolClicked(symbol: string) {
    if (this.regInput === undefined) {
      this.regInput = symbol;
    } else {
      this.regInput = this.regInput + symbol;
    }
   this.checkRegex()
  }

  
  test() {
    
  }
  
  globalMatchTest() {

  }

  stringTyped() {
    this.chars = [...this.stringInput];
    if(this.regInput !== undefined) {
    this.checkRegex()
    }
  }

  checkRegex() {
    
    this.matchTest(this.stringInput, this.regInput, this.flagInput)
  }

  matchTest(str: string, reg: string, flag: string) {
    const matchedArray = [];
    const test = new RegExp(reg, flag);
    const match = str.match(test)[0].length;
    const position = str.match(test).index;
    for(let i = position; i <  position + match; i++) {
      matchedArray.push(i)
    }
    this.regexMatched(matchedArray);
    
  }

  // this.outputArray[pos].style.backgroundColor = '#fff'
  // this.outputArray[pos].style.color = '#000'
  regexMatched(arr) {
   
    const charArray = new Array(this.stringInput.length).fill(0).map((x, i) => x = i)
    charArray.forEach(pos => {
      if(arr.includes(pos)) {
        this.outputArray[pos].style.backgroundColor = '#900C3F';
        this.outputArray[pos].style.color = '#fff';
      }else{
        this.outputArray[pos].style.backgroundColor = '#fff'
        this.outputArray[pos].style.color = '#000' 
      }
    })
      
   
  }

  
}
