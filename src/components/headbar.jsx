import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Button } from 'antd';
import logo from '../logo.svg'
import 'antd/dist/antd.css';
import { Menu } from 'antd';

export default HeaderBar => { 
    return (
       <div style={{height:'100%',display:'flex',justifyContent:'space-between'}}>
           <div style={{display:'flex'}}>  
           <img src={logo} style={{height:'40px',marginTop:'15px'}} className="App-logo" alt="logo" />

            <h1 style={{color:'white'}}>DashBoard</h1>
            <div className="top-navbar" style={{marginLeft:"120px"}}>
                <Menu  mode="horizontal" style={{borderBottom:'1px solid #80808021'}}  theme="dark">
                    <Menu.Item key="mail" >
                    Navigation One
                    </Menu.Item>
                    <Menu.Item key="1" >
                    Navigation One
                    </Menu.Item>
                </Menu>
            </div>
           </div>
           <Button type="primary" style={{marginTop:'20px'}}>Primary Button</Button>
           
       </div>
    )
}