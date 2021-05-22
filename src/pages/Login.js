import { Form, Input, Button, message, Layout, Col, Row, Spin, Card } from 'antd';
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {
    onLogin,
} from '../app/user';
import {
    onLoading,
} from '../app/main';

import { fetch } from '../utils/fetch'

import { useTranslation, } from 'react-i18next';

const { Header, Content, Footer } = Layout


const Login = () => {
    const { isLoading, langauge } = useSelector((state) => state.main)
    const dispatch = useDispatch()

    const { t, i18n } = useTranslation();

    const switchingLanguage = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("th");
        } else {
            i18n.changeLanguage("en");
        }
    };

    const onFinish = (values) => {
        toLogin(values.username, values.password)
        // console.log('Success:', values);
        // dispatch(login(values.username))
    };

    const toLogin = async (email, password) => {
        dispatch(onLoading(true))

        await fetch({
            method: 'post',
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOevcy4aLNTreuxxPDpzCqq9BdAzJXaH4`,
            data: { email, password }
        })
            .then((res) => {
                if (res.status === 200) {
                    // console.log('ok')
                    dispatch(onLogin(res.data.email))
                } else {
                    // console.log(res.data)
                    message.error(`login Fail : ${res.data}`)
                }
                dispatch(onLoading(false))
            })
    }

    return (<>
        <Spin style={{ verticalAlign: 'middle', minHeight: '80vh' }} spinning={isLoading} tip='Loading...'>

            <Layout style={{ minHeight: '100vh', backgroundColor: '#5cdbd3' }} >
                <Header style={{ paddingTop: 20, backgroundColor: '#5cdbd3' }}>
                    <Button type='text' size='large' style={{ float: 'right' }} onClick={() => switchingLanguage()}>{i18n.language.toUpperCase()}</Button>
                </ Header>
                <Content style={{ overflow: 'hidden' }}>
                    <Row gutter={24} justify='center' align='middle' style={{ minHeight: '80vh' }}>
                        <Col lg={{ span: 8 }} md={{ span: 10 }} xs={{ span: 20 }}>
                            <Card >
                                <Form
                                    // {...layout}
                                    layout='vertical'
                                    name="basic"
                                    onFinish={onFinish}
                                >
                                    < h1 style={{ textAlign: 'center' }}>
                                        {t('login')}
                                    </h1>
                                    <Form.Item
                                        label={t('username')}
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label={t('password')}
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Row gutter={[24, 24]}>
                                        <Col xs={24} >
                                            <a style={{ float: 'right', color: '#000' }} href="">
                                                {t('forget-pass')}
                                            </a>
                                        </Col>
                                        <Col xs={24}>
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit" block={true}>
                                                    {t('submit')}
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Content >

            </Layout >
        </Spin >

    </>
    );
};

export default Login