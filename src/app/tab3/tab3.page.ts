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
  regexResults = [];
  indexArray = [];
  outputArray = document.getElementsByClassName("char");

  symbolClicked(symbol: string) {
    if (this.regInput === undefined) {
      this.regInput = symbol;
    } else {
      this.regInput = this.regInput + symbol;
    }
    this.checkRegex();
  }

  regexMatchTester(str: string, reg: string, flag: string) {
    this.regexResults = [];
    const test = new RegExp(reg, flag);
    const isRegex = test.test(str)
    if(flag !== undefined && flag.length > 0) {
      console.log('flag reg')
    }else{
      if(str !== undefined && str.length > 0) {
        this.regexResults.push({
          result: str.match(test),
          index: str.match(test).index
        });
       }
    }
  
  
    
    
     
  
  }
   test() {
    
   }

  stringTyped() {
    this.chars = [...this.stringInput];
   // console.log(this.regInput)
    if(this.regInput !== undefined) {
      this.checkRegex()
    }
    
  }

  checkRegex() {
    
   
      this.indexArray = []
      this.regexMatchTester(this.stringInput, this.regInput, this.flagInput);
      console.log(this.regexResults)
      this.regexResults.forEach((x: any) => {
      const amount = x.result[0].length;
      const start = x.index;
      
      this.indexArray.push(this.getIndexes(start, amount))
      
    });
    
    
  }

  getIndexes(start: number, amount: number) {
    console.log('index check run')
    const arr = [];
    for (let i = start; i < (start + amount); i++) {
      //console.log(i)
      arr.push(i);
    }
  //  console.log(arr)
  }
}
