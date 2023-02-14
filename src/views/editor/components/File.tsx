import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// @ts-ignore
import {javascript} from '@codemirror/lang-javascript';
import {okaidia} from '@uiw/codemirror-theme-okaidia';

export default function File() {
  const onChange = React.useCallback((value: any) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="400px"
      extensions={[javascript({jsx: true})]}
      onChange={onChange}
      theme={okaidia}
    />
  );
}