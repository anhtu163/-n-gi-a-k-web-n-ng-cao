import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import '../App.css'

export default class HomePage extends PureComponent {


  render(){
    const st = this.props;

    if(st.isPlay){
      return <Redirect to='/'/>
    }
    if (st.token === 'err') {
      return <Redirect to="/login" />;
    }
    if (st.token === '') {
      return <Redirect to="/login" />;
    }
        return (<div>
            <AppBar position="static">
              <Toolbar>
                
                <Typography variant="h6" className='title'>
                  TIC TAC TOE
                </Typography>
                <Button className='menu' color='inherit' onClick={()=>{
                  st.play(st.name,st.token);
                }}>Chơi với máy</Button>
                {/* <Button className='menu' color='inherit' onClick={()=>{
                  st.logOut();
                }}>Log Out</Button> */}
                <IconButton
                
                className="account"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={e=>{ 
                    e.preventDefault()                 
                    st.openMenu(e.currentTarget) 
                }}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={st.isMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 50,
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 200,
                }}
                open={Boolean(st.isMenu)}>
                <MenuItem disabled>{st.name}</MenuItem>
                <MenuItem >Thông tin cá nhân</MenuItem>
                <MenuItem >Tài khoản của tôi</MenuItem>
                <MenuItem onClick={e=>{
                  e.preventDefault() 
                  st.logOut()}}>Đăng xuất</MenuItem>
                <MenuItem onClick={e=>{
                  e.preventDefault() 
                  st.closeMenu()}}>Đóng</MenuItem>
              </Menu>
              
              <Typography className='user-name'>Xin chào, {st.name}</Typography>
              </Toolbar>
            </AppBar>
          </div>);
    }
}

