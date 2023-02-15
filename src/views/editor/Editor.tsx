import React, { useState } from 'react'
import { TCModal } from './components/TCModal'
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Switch, Tabs, TabPane } from '@douyinfe/semi-ui';
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

export default function Editor() {
  const onbreakpoint = (screen: any, bool: any) => {
    console.log(screen, bool);
  };
  const [curFile, setcurFile] = useState('1');
  const tabList = [
    { tab: '文档', itemKey: '1' },
    { tab: '快速起步', itemKey: '2' },
    { tab: '帮助', itemKey: '3' },
  ];
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };
  const onTabClick = (key: string) => {
    setcurFile(key);
  }
  const { Header, Footer, Content, Sider } = Layout;
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <div>
          <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
            <Nav.Header>
              <IconSemiLogo style={{ fontSize: 36 }} />
            </Nav.Header>
            <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large" />} />
            <Nav.Item itemKey="Live" text="直播" icon={<IconLive size="large" />} />
            <Nav.Item itemKey="Setting" text="设置" icon={<IconSetting size="large" />} />
            <Nav.Footer>
              <Switch checkedText="暗" uncheckedText="亮" onChange={switchMode} aria-label="switch bg color" />
              <Button
                theme="borderless"
                icon={<IconBell size="large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
              <Button
                theme="borderless"
                icon={<IconHelpCircle size="large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
              <Avatar color="orange" size="small">
                YJ
              </Avatar>
            </Nav.Footer>
          </Nav>
        </div>
      </Header>
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
              {tabList.map(tab => (
                <TabPane tab={
                  <span>
                    <IconFile />
                    文档
                  </span>
                } itemKey={tab.itemKey} key={tab.itemKey}
                  closable={true} >
                  <div
                    style={{
                      borderRadius: '10px',
                      border: '1px solid var(--semi-color-border)',
                      height: '390px',
                      fontSize:'16px',
                      fontWeight:'600'
                    }}
                  >
                    {/*<Skeleton placeholder={<Skeleton.Paragraph rows={2}/>} loading={true}>*/}
                    {/*  <p>Hi, Bytedance dance dance.</p>*/}
                    {/*  <p>Hi, Bytedance dance dance.</p>*/}
                    {/*</Skeleton>*/}
                    <File />
                  </div>
                </TabPane>
              ))}
            </Tabs>

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

