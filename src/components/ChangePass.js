import React from 'react';
import { Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';


export default class ChangePass extends React.PureComponent {
  constructor() {
    super();
    this.password = "";
    this.newpassword = "";
    this.confirm = "";
    this.err = "";
  }

  render() {
    const st = this.props;

    if(st.isChangePass === false){
      return <Redirect to="/infor" />;
    }
  
    if(this.err === 1){
      this.err = "Mật khẩu nhập lại không trùng khớp"
    }
    if(this.err === 2){
      this.err = "Mật khẩu không đúng"
    }

    

    
    return (
      <div className="loginLayout">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <center>
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Đổi mật khẩu
              </Typography>
            </center>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField

                    name="Password"
                    variant="outlined"
                    required
                    fullWidth
                    id="Password"
                    type = "password"
                    onChange={event => {
                      this.password = event.target.value;
                    }}
                    label="Mật khẩu hiện tại"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    
                    name="New Password"
                    variant="outlined"
                    required
                    fullWidth
                    id="New Password"
                    type = "password"
                    
                    onChange={event => {
                      this.newpassword = event.target.value;
                    }}
                    label="Mật khẩu mới"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="confirm"
                    type = "password"
                    onChange={event => {
                      this.confirm = event.target.value;
                    }}
                    label="Nhập lại mật khẩu mới"
                    name="confirm"
                  />
                </Grid>
              </Grid>
              <div className="Error">{this.err}</div>
              <div className="GridForm">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={event => {
                    event.preventDefault();
                    if(this.password !== st.password)
                    {
                      this.err = 2
                    }
                    else if(this.confirm === this.newpassword){
                      st.changePass(st.username,this.password,this.newpassword);
                      this.password = ""
                      this.newpassword = ""
                      this.confirm=""
                    }else{
                      this.err = 1
                    }
                  }}>
                  Đổi mật khẩu
                </Button>
              </div>
             
            </form>
          </div>
        </Container>
        <div className="user-info">
        <Button className='back-home' color='primary' onClick={()=>{
                  st.backChangePass()
                
                }}>Quay về trang chủ</Button>
        </div>
      </div>
    );
  }
}
