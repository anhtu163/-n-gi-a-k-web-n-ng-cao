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


export default class InforUser extends React.PureComponent {
  constructor() {
    super();
    this.username = "";
    this.password = "";
    this.name = "";
    this.phone = "";
    this.err = "";
  }

  render() {
    const st = this.props;
    this.username = st.username;
    this.password = st.password;
    this.phone = st.phone;
    this.name = st.name;
    if(!st.isUpdate){
        return <Redirect to="/home" />;
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
                Cập nhật thông tin cá nhân
              </Typography>
            </center>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField

                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    defaultValue = {st.name}
                    onChange={event => {
                      this.name = event.target.value;
                    }}
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    
                    name="Phone"
                    variant="outlined"
                    required
                    fullWidth
                    id="Phone"
                    defaultValue = {st.phone}
                    onChange={event => {
                      this.phone = event.target.value;
                    }}
                    label="Phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    defaultValue = {st.username}
                    onChange={event => {
                      this.username = event.target.value;
                    }}
                    label="Username"
                    name="username"
                    disabled
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
                    st.updateUser(this.username,this.name,this.phone)
                    this.err = "Cập nhật thành công"
                  }}>
                  Cập nhật
                </Button>
              </div>
              

              <div className="GridForm">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={event => {
                    event.preventDefault();
                    
                  }}>
                  Đổi mật khẩu
                </Button>
              </div>
             
            </form>
          </div>
        </Container>
        <div className="user-info">
        <Button className='back-home' color='primary' onClick={()=>{
                st.backUpdate()
                st.logIn(st.username,st.password)
                }}>Quay về trang chủ</Button>
        </div>
      </div>
    );
  }
}
