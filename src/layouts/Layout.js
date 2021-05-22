import React, { useState, useEffect } from 'react'
import { Layout, Menu, Affix, Image, message, Modal, Button, Divider } from 'antd'
import { useHistory } from 'react-router-dom'

import {
  Switch, Route, Redirect, Link,
} from 'react-router-dom'
import { UserOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import routes from '../config/routes'

import { useSelector, useDispatch } from 'react-redux';
import {
  onLogout,
} from '../app/user';
import {
  onLoading,
  onCollapsedSider,
  onSelectedKey,
  onOpenKey
} from '../app/main';

import { useTranslation, } from 'react-i18next';

const { Header, Content, Sider, Footer } = Layout
const { SubMenu } = Menu
const PageLayout = () => {

  const { username } = useSelector((state) => state.user)
  const { isLoading, collapsedSider, selectedKey, openKey } = useSelector((state) => state.main)

  const dispatch = useDispatch()

  const history = useHistory()

  // const [openKey, setOpenKey] = useState([])
  // const [selectedKey, setSelectedKey] = useState([])
  // const [collapsedSider, setCollapsedSider] = useState(true);
  const { t, i18n } = useTranslation();

  const switchingLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    dispatch(onOpenKey([history?.location?.pathname]))
    dispatch(onSelectedKey([history?.location?.pathname]))

  }, []);



  const renderMenu = (route) => {

    return (
      <Menu.Item key={route.path} icon={route.menu?.icon} >
        <Link to={route.path}>{route.menu?.render}</Link>
      </Menu.Item>
    )

  }
  const confirmLogout = () => {
    Modal.confirm({
      title: 'Do you Want to Logout?',
      icon: <LogoutOutlined />,
      onOk() {
        // onLogout()
        dispatch(onLogout())
      },
      onCancel() {
        console.log('Cancel');
      },
      okText: 'YES',
      cancelText: 'NO',
    });
  }
  // const onLogout = () => {
  //   const env = process.env.REACT_APP_ENV === 'LOCAL' ? 'dev' : process.env.REACT_APP_ENV?.toLowerCase()

  //   apiFetchPortal({
  //     method: 'get',
  //     url: 'user/logout',
  //   }).then((res) => {
  //     // console.log(res)
  //     if (res.data?.success) {
  //       Cookies.remove(`authen-token-${env}`, { path: '/', domain: '.indexlivingmall.com' })
  //       message.info('you have logged out.')
  //       window.location.reload()
  //     } else {
  //       message.error('logout failed.')
  //     }

  //   })
  // }

  const paths = routes.map((route) => {
    const generateRegex = (path) => {
      const regexp = path.split('/').map((p) => {
        if (p.startsWith(':')) return '\\S+'
        return p
      }).join('/')
      return new RegExp(`${regexp}$`, 'g')
    }

    const build = (p) => ({ path: p?.path, render: p?.route?.component, regex: generateRegex(p?.path) })

    if (route.type === 'subMenu') { return route.children.map((children) => ({ ...build(children), parent: route?.key })) } return build(route)
  }).flat(1)

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Affix >
        <Sider
          // theme="light"
          collapsible
          collapsedWidth={"0"}
          collapsed={collapsedSider || undefined}
          onCollapse={(collapsed) => {
            console.log('hh', collapsed)
            dispatch(onCollapsedSider())
          }}
          style={{
            height: '100vh',
            position: 'static',
            zIndex: 100,
            backgroundColor: '#006d75'
          }}
          trigger={null}
        >
          <h4 style={{ textAlign: 'center', lineHeight: '58px' }}><span style={{ color: '#fff' }}>RAP MANAGEMENT</span></h4>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={selectedKey}
            defaultOpenKeys={openKey}
            style={{
              backgroundColor: '#5cdbd3'
            }}
            onSelect={(e) => {
              // console.log('e', e.key)
              dispatch(onSelectedKey(e.key))
            }}
          >
            {
              routes.map((route) => {
                if (route?.type === 'subMenu') {
                  return (
                    <SubMenu key={route?.key} icon={route?.menu?.icon} title={route?.menu?.render} >
                      {route.children.filter((r) => r.type === 'menu').map((r) => renderMenu(r))}
                    </SubMenu>
                  )
                }
                if (route?.type === 'menu') return renderMenu(route)
                return (<></>)
              })
            }
          </Menu>
        </Sider>
      </Affix>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          <span style={{ paddingLeft: 20, cursor: 'pointer' }} onClick={() => dispatch(onCollapsedSider())}>
            {collapsedSider ? <MenuUnfoldOutlined style={{ color: '#08979c' }} /> : <MenuFoldOutlined style={{ color: '#08979c' }} />}
          </span>
          <span style={{ float: 'right', fontWeight: 500 }}>
            <span >
              {username}
            </span>
            <Divider type='vertical' />
            <span onClick={() => switchingLanguage()}>
              Leaf Tech Co., Ltd.
            </span>
            <Divider type='vertical' />
            <span onClick={() => switchingLanguage()}>
              {i18n.language.toUpperCase()}
            </span>
            <Menu mode="horizontal" style={{ float: 'right' }}>
              <Divider type='vertical' />
              <Menu.Item key="home" icon={<LogoutOutlined style={{ color: '#08979c' }} />}
                onClick={() =>
                  confirmLogout()
                }><span style={{ color: '#08979c' }}>Logout</span>
              </Menu.Item>
            </Menu>
          </span>
        </Header>
        <Content
          style={{
            margin: '16px 16px',
            padding: 24,
            minHeight: '100vh',
            // background: '#fff',
          }}
        >
          <div className="site-layout-background">
            <Switch>
              {paths.map((p) => <Route exact path={p?.path} render={p?.render} />)}
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', fontSize: '12px' }}>Line Connect Admin © Index Livingmall 2021 Version 0.1.0</Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout
