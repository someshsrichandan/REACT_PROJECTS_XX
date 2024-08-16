import React from 'react'
import { Link } from 'react-router-dom';
import { Button , Menu ,Typography ,Avatar } from 'antd';
import { HomeOutlined,MoneyCollectOutlined ,BulbOutlined,FundOutlined, } from '@ant-design/icons';
import Logo from '../images/crypto.png';

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-continer'>
            <Avatar src={Logo} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>CryptoSaga</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
            <Menu.Item key='1' icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='1' icon={<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Crypto Currencies</Link>
            </Menu.Item>
            <Menu.Item key='1' icon={<MoneyCollectOutlined/>}>
                <Link to='/exhanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item key='1' icon={<BulbOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}
