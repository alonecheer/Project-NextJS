import React from 'react';
import { Form, Icon, Input, Button } from 'antd'
import 'antd/dist/antd.css'
import '../styles/style.css'
import Link from 'next/link';
import Router from 'next/router'

function Login() {
    var state = {
        username: "",
        password: ""
    }
    let handleBtnClick = (e) => {
        e.preventDefault();
        console.log("Submit data");
    }
    return (
        <div className="boxlogin">
            <div style={{ width: '400px', background: '#ECECEC', padding: '30px' }}>
                <span>PSU | PASSPORT</span>
                <Form.Item >
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                

                    <Button onClick={()=>{ Router.push('/options')}} type="primary" block>
                        Sing In
                    </Button>


            </div>
        </div>
    )
}
export default Login;