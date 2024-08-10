import React from 'react';
import { useState , useEffect } from 'react';
import { Alert, Card, Space } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { IoPersonSharp } from "react-icons/io5";
import { Button, Flex } from 'antd';
  function Login() {
    const container = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'skin',
      };
      const [name,updateName]=React.useState("");
      const [pass,updatePass]=React.useState("");
      const [ok,updateOk]=React.useState("False");
      console.log(name);
      console.log(pass);
      
     function  handleSubmit(){
      if (name==="admin" && pass==="1234"){
        console.log("Login");
    }
    }
      return (

    <div className="container" style={container}>
    <Space direction="vertical" size={16} >
    <Card title={<><h3><IoPersonSharp /> Login</h3></>}  style={{ width: 300 , textAlign:"center" }}>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon"/>} 
      onChange={(e) => updateName(e.target.value)}
    />
    <br/>
    <br/>
    <Input.Password placeholder="Input password" onChange={(e) => updatePass(e.target.value)} />
    <br/>
    <br/>
    <Button type="primary" onClick={handleSubmit()} >Log In</Button>
    </Card>
  </Space>
    </div>
  )
}

export default Login