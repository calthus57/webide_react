import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// @ts-ignore
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { githubLightInit } from '@uiw/codemirror-themes-all';
import axios from 'axios';
// import MonacoEditor from 'react-monaco-editor';



export default function File() {
  const [value, setvalue] = useState("console.log('hello world!');")
  // const [code, setcode] = useState("hello world")
  axios.get("http://localhost:8088/").then(res => {
            console.log(res)
            setvalue(res.data)
          }).catch()

  const onChange = React.useCallback((value: any) => {
    console.log('value:', value);
  }, []);
  // const editorDidMount=(editor: { focus: () => void; }, monaco: any)=> {
  //   console.log('editorDidMount', editor);
  //   editor.focus();
  // }
  // const options = {
  //   selectOnLineNumbers: true
  // };
  return (
    <CodeMirror
      value={value}
      height="400px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme={githubLightInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        }
      })}
    />
    // <MonacoEditor
    //     height="400"
    //     language="javascript"
    //     theme="vs-dark"
    //     value={code}
    //     options={options}
    //     onChange={onChange}
    //     editorDidMount={editorDidMount}
    //   />
  );
}