import { createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../editor/Editor";


const initialState: IFile[] = [
  {
    name: "script.ts",
    language: "javascript",
    value: "const onbreakpoint = (screen: any, bool: any) => {\n" +
      "    console.log(screen, bool);\n" +
      "  };",
  }, {
    name: "style.css",
    language: "css",
    value: ".container {\n" +
      "    height: 100vh;\n" +
      "    padding: 10% 30%;\n" +
      "    /*overflow: hidden;*/\n" +
      "    background-image: url(./assets/img/pexels-alena-darmel-7710150.jpg);\n" +
      "    background-size: cover;\n" +
      "    background-attachment: fixed;\n" +
      "\n" +
      "}"
  }, {
    name: "index.html",
    language: "html",
    value: "<body>\n" +
      "  <noscript>You need to enable JavaScript to run this app.</noscript>\n" +
      "  <div id=\"root\"></div>\n" +
      "  <!--\n" +
      "    This HTML file is a template.\n" +
      "    If you open it directly in the browser, you will see an empty page.\n" +
      "\n" +
      "    You can add webfonts, meta tags, or analytics to this file.\n" +
      "    The build step will place the bundled scripts into the <body> tag.\n" +
      "\n" +
      "    To begin the development, run `npm start` or `yarn start`.\n" +
      "    To create a production bundle, use `npm run build` or `yarn build`.\n" +
      "  -->\n" +
      "</body>",
  }
]

const openedFilesSlice = createSlice({
  name: "openedFiles",
  initialState,
  reducers: {

  }
})

export default openedFilesSlice.reducer;