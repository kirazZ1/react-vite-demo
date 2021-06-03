import React, { useState } from 'react'
import { Layout } from 'antd';
//import { Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import 'antd/dist/antd.css';
import HeadBar from '../components/headbar'
import SideBar from '../components/sidebar'

export default Dashboard => { 
    return (
        <Layout style={{height:'100%'}}>
            <Header style={{height: '65px',backgroundColor:'rgb(0 21 41)'}}>
                <HeadBar />
            </Header>
            {/* <Content className = 'content' style={{background:'white'}}>
                <SideBar/>
            </Content> */}
            <Layout>
                <Sider width={'256px'} collapsible > 
                    <SideBar/>
                </Sider>
                <Layout>
                    <Content>
                        Content
                    </Content>
                    <Footer style={{backgroundColor:'rgb(0 21 41)'}}>
                        <div style={{color:'white'}}>
                            footer
                        </div>
                    </Footer>
                </Layout>
               
                
            </Layout>
         
        </Layout>
    )
}