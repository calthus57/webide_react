import React, {useRef, useState} from 'react';
import Editor from "@monaco-editor/react";
import {editor} from "monaco-editor";
import IModelContentChangedEvent = editor.IModelContentChangedEvent;

interface IFileProps {
  path: string,
  defaultLanguage: string | undefined,
  defaultValue: string | undefined
}

export default function File(props: IFileProps) {
  const editorRef = useRef(null);

  const [value, setvalue] = useState("console.log('hello world')")

  const handleEditorChange = (value: string | undefined, event: IModelContentChangedEvent) => {
    // here is the current value
  }

  const handleEditorDidMount = (editor: any, monaco: any) => {
    console.log(typeof editor)
    editorRef.current = editor;
  }

  return (
    <Editor
      height="90vh"
      path={props.path}
      defaultLanguage={props.defaultLanguage}
      defaultValue={props.defaultValue}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  );
}