import React, {useRef, useState} from 'react';
import {Avatar, Button, Dropdown, Nav, Switch} from "@douyinfe/semi-ui";
import {IconBell, IconHelpCircle, IconHome, IconLive, IconSemiLogo, IconSetting} from "@douyinfe/semi-icons";
import Header from '@douyinfe/semi-ui/lib/es/navigation/Header';


export default function EditorHeader() {
  return (
    <Header style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
      <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
        <Nav.Header>
          <IconSemiLogo style={{fontSize: 36}}/>
        </Nav.Header>
        <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large"/>}/>
        <Nav.Item itemKey="Live" text="直播" icon={<IconLive size="large"/>}/>
        <Nav.Item itemKey="Setting" text="设置" icon={<IconSetting size="large"/>}/>
        <Dropdown
          trigger={'click'}
          position={'bottomLeft'}
          render={
            <Dropdown.Menu>
              <Dropdown.Item>Menu Item 1</Dropdown.Item>
              <Dropdown.Item>Menu Item 2</Dropdown.Item>
              <Dropdown.Item>Menu Item 3</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <Button>Click me</Button>
        </Dropdown>
        <Nav.Footer>
          {/*<Switch checkedText="暗" uncheckedText="亮" onChange={switchMode} aria-label="switch bg color"/>*/}
          <Switch checkedText="暗" uncheckedText="亮" aria-label="switch bg color"/>
          <Button
            theme="borderless"
            icon={<IconBell size="large"/>}
            style={{
              color: 'var(--semi-color-text-2)',
              marginRight: '12px',
            }}
          />
          <Button
            theme="borderless"
            icon={<IconHelpCircle size="large"/>}
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
    </Header>
  );
}