import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons"
function App() {
  return (
    <div className="App">
      <div className="app-header">
        <div className="top-header">
          <div className="inner">
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>中文</Menu.Item>
                  <Menu.Item>英文</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              语言
          </Dropdown.Button>
            <Button.Group className="button-group">
              <Button>注册</Button>
              <Button>登陆</Button>
            </Button.Group>
          </div>

        </div>
        <Layout.Header className="main-heade">
          <img className="App-logo" src={logo} alt="" />
          <Typography.Title level={3} className="title">旅游网</Typography.Title>
          <Input.Search
            className="search-input"
            placeholder={"请输入目的地，主题或关键字"}
          />
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
