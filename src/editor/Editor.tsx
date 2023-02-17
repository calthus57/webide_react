import React, { useEffect, useRef, useState } from 'react'
import { TCModal } from './components/TCModal'
import { Layout, Nav, Tabs, TabPane } from '@douyinfe/semi-ui';
import {
  IconBytedanceLogo,
  IconHome,
  IconLive,
  IconSetting,
  IconHistogram,
  IconFile
} from '@douyinfe/semi-icons';
import Directory from "./components/Directory";
import EditorHeader from "./components/EditorHeader";
import CodeEditor from './components/CodeEditor';

interface IFile {
  name: string,
  language: string,
  value: string
}

export default function Editor() {
  const { Footer, Content, Sider } = Layout;

  const dirRef = useRef(null)
  
  useEffect(() => {
    console.log(dirRef.current)
    // document.body.addEventListener('mousemove', onMove)
    // document.body.addEventListener('mouseup', onUp)
    // document.getElementById('container').addEventListener('mousedown', down)
  }, [])

  const onbreakpoint = (screen: any, bool: any) => {
    console.log(screen, bool);
  };
  
  // 是否开启尺寸修改
  let resizeable = false
  // 鼠标按下时的坐标，并在修改尺寸时保存上一个鼠标的位置
  let clientX: number
  // directory可修改的最小宽高
  let minW = 8, minH = 8
  // 判断是否可以调整Directroy所造Sider的宽度
  // const canResize = (ev: { offsetX: any; }) => {
  //   let xP, offset
  //   xP = ev.offsetX
  //   // 触发宽度修改的范围
  //   offset = 10
  //   if (xP > c.offsetWidth - offset)
  //     return true
  //   return false
  // }
  // 鼠标移动事件
  // const onMove = (e) => {
  //   // 修改鼠标显示效果
  //   if (canResize(e)) {
  //     c.style.cursor = 'e-resize';
  //   }
  //   // 当开启尺寸修改时，鼠标移动会修改div尺寸
  //   if (resizeable) {
  //     // 鼠标按下的位置在右边，修改宽度
  //     if (direc.indexOf('e') !== -1) {
  //       c.style.width = Math.max(minW, c.offsetWidth + (e.clientX - clientX)) + 'px'
  //       clientX = e.clientX
  //     }
  //   }
  // }
  // 鼠标松开时结束尺寸修改
  // const onUp = () => {
  //   resizeable = false
  // }

  // // 鼠标按下时开启尺寸修改
  // const onDown = (e: { clientX?: any; offsetX?: any; }) => {
  //   // 当位置为边时才开启尺寸修改
  //   if (canResize(e)) {
  //     resizeable = true
  //     clientX = e.clientX
  //   }
  // }


  const files: IFile[] = [{
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
  }]
  const [curFile, setCurFile] = useState(files[0]);

  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };
  const onTabClick = (key: string) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].name == key) {
        setCurFile(files[i]);
      }
    }
  }

  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <EditorHeader />
      <Layout>
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            defaultIsCollapsed
            style={{ maxWidth: 220, height: '100%' }}
            defaultSelectedKeys={['Home']}
            items={[
              { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
              { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
              { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
              { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
            ]}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>
        <Layout>
          <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Directory />
          </Sider>
          <Content
            style={{
              backgroundColor: 'var(--semi-color-bg-0)',
            }}
          >
            <Tabs
              collapsible   // 可滚动
              type="card"
              onChange={key => onTabClick(key)}
              // keepDOM={false}
              tabPaneMotion={false}  // 是否使用动画切换 tabs
            >
              {files.map(file => (
                <TabPane tab={
                  <span>
                    <IconFile />
                    {file.name}
                  </span>
                } itemKey={file.name} key={file.name}
                  closable={true}>
                </TabPane>
              ))}
            </Tabs>
            <div
              style={{
                borderRadius: '10px',
                height: '390px',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              <CodeEditor path={curFile.name} defaultLanguage={curFile.language}
                defaultValue={curFile.value} />
            </div>
          </Content>
        </Layout>

      </Layout>

      <Footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          color: 'var(--semi-color-text-2)',
          backgroundColor: 'rgba(var(--semi-grey-0), 1)',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
          <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
        </span>
        <span>
          <span style={{ marginRight: '24px' }}>平台客服</span>
          <span>反馈建议</span>
        </span>
      </Footer>
    </Layout>
  )
}

