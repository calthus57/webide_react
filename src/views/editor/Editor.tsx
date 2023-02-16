import React, {useState} from 'react'
import {TCModal} from './components/TCModal'
import {Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Switch, Tabs, TabPane} from '@douyinfe/semi-ui';
import {
  IconSemiLogo,
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconLive,
  IconSetting,
  IconHistogram,
  IconFile
} from '@douyinfe/semi-icons';
import Directory from "./components/Directory";
import File from "./components/File";
import EditorHeader from "./components/EditorHeader";

interface IFile {
  name: string,
  language: string,
  value: string
}

export default function Editor() {
  const onbreakpoint = (screen: any, bool: any) => {
    console.log(screen, bool);
  };
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
  const {Header, Footer, Content, Sider} = Layout;
  return (
    <Layout style={{border: '1px solid var(--semi-color-border)'}}>
      <EditorHeader/>
      <Layout>
        <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
          <Nav
            defaultIsCollapsed
            style={{maxWidth: 220, height: '100%'}}
            defaultSelectedKeys={['Home']}
            items={[
              {itemKey: 'Home', text: '首页', icon: <IconHome size="large"/>},
              {itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large"/>},
              {itemKey: 'Live', text: '测试功能', icon: <IconLive size="large"/>},
              {itemKey: 'Setting', text: '设置', icon: <IconSetting size="large"/>},
            ]}
            footer={{
              collapseButton: true,
            }}
          />
        </Sider>
        <Layout>
          <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
            <Directory/>
          </Sider>
          <Content
            style={{
              padding: '24px',
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
                    <IconFile/>
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
              <File path={curFile.name} defaultLanguage={curFile.language}
                    defaultValue={curFile.value}/>
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
          <IconBytedanceLogo size="large" style={{marginRight: '8px'}}/>
          <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
        </span>
        <span>
          <span style={{marginRight: '24px'}}>平台客服</span>
          <span>反馈建议</span>
        </span>
      </Footer>
    </Layout>
  )
}

