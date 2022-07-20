import { Component , OnInit} from '@angular/core';
import { MonacoEditorLoaderService } from "@materia-ui/ngx-monaco-editor";
import { filter, take } from "rxjs/operators";
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

  code = "// Write your code here" 

  objectSource:any

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {};

  ngOnInit() {
    this.monacoLoaderService.isMonacoLoaded$
    .pipe(
      filter(isLoaded => !!isLoaded),
      take(1)
    )
    .subscribe(() => {
      this.registerJSValidator();
    });

  };

  registerJSValidator() {

    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false
    });

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      allowNonTsExtensions: true
    });

    if(this.objectSource) {
      const libUri = 'ts:filename/facts.d.ts';
      monaco.languages.typescript.javascriptDefaults.addExtraLib(this.objectSource, libUri);
      monaco.editor.createModel(this.objectSource, 'typescript', monaco.Uri.parse(libUri));

      const textEditor:HTMLElement = document.getElementById('textEditor') as HTMLElement;
      
      monaco.editor.create(textEditor, {
        value: this.code,
        language: 'javascript',
        theme: 'vs-dark'
      });
    };
  };

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
    this.registerJSValidator();
  };

  functionDetails = false;
  handleFunctionDetails() {
    this.functionDetails = true
  }

}
