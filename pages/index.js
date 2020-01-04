import React from 'react'
import Login from './login'
import { Form, Icon, Input, Button } from 'antd'
// import 'antd/dist/antd.css'
import '../styles/style.css'
import MainLayout from '../layouts/MainLayout'

function Index() {
    
    return (
        <div className="bg">
           <Login/>
        </div>
    )
}
export default Index;