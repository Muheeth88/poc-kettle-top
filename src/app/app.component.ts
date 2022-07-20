import { Component , OnInit} from '@angular/core';
import { contractSource } from './data/contract-source';
import { invoiceSource } from './data/invoice-source';
import { porSource } from './data/por-source';
import { prrSource } from './data/prr-source';
import { vcrSource } from './data/vcr-source';
import { vrrSource } from './data/vrr-source';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  functionName:string = "";
  functionType: string = "";
  objectType:string = "";

  objectSource:any


  constructor() {};

  ngOnInit() {};

  onChange(event: any) {
  switch (event.target.value) {
    case "prr":
       this.objectSource = prrSource;
       break;
    case "por":
      this.objectSource = porSource;
      break;
    case "invoice":
      this.objectSource = invoiceSource;
      break;
    case "vcr":
      this.objectSource = vcrSource;
      break;
    case "vrr":
      this.objectSource = vrrSource;
      break;
    case "contract":
      this.objectSource = contractSource;
      break;
    }
  };

  functionDetails = false;
  handleFunctionDetails() {
    this.functionDetails = true
  }

}
