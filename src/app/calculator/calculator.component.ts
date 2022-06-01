import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  result:string=""
  longbuttons:string[]=['AC','CE']
  buttons:string[]=['7','8','9','/','4','5','6','*','1','2','3','-','+','=','0','.']

  private prevalue:string=""
  private curvalue:string=""

  addtoexpression(value:string){
    if(this.result != " ")
    {
      this.prevalue=this.curvalue;
      this.curvalue=value;
    
    }
    if(value== 'AC'){
      this.result=' '
    }
    else if (value=='CE')
    {
      this.result=this.prevalue!= "= "? this.result.slice(0,-1):this.result

    }
    else if( value =='='){
      this.result=eval(this.result);
    }
    else{
      this.result+=value;
    }
  }
  ngOnInit(): void {
  }

}
