import { Component, OnInit, Input } from '@angular/core';
import {
  MonacoEditorConstructionOptions,
  MonacoEditorLoaderService
} from "@materia-ui/ngx-monaco-editor";
import { filter, take } from "rxjs/operators";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Input() objectSource: any

  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'javascript',
  };

  code = "// Write your code here" 
  libUri = 'ts:filename/facts.d.ts';

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {}

  ngOnInit(): void {
    this.monacoLoaderService.isMonacoLoaded$
    .pipe(
      filter(isLoaded => !!isLoaded),
      take(1)
    )
    .subscribe(() => {
      this.registerJSValidator();
    });
  }

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
      monaco.languages.typescript.javascriptDefaults.addExtraLib(this.objectSource, this.libUri);
      monaco.editor.createModel(this.objectSource, 'typescript', monaco.Uri.parse(this.libUri));
    };

  };

}
