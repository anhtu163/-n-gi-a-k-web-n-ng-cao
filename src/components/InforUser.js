import React from 'react';
import { Redirect } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

export default class InforUser extends React.PureComponent {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.name = '';
    this.phone = '';
    this.err = '';
    this.loading = 'false'
  }


  render() {
    const st = this.props;

    

    this.username = st.username;
    this.password = st.password;
    this.phone = st.phone;
    this.name = st.name;

    if (!st.isLogin) {
      return <Redirect to="/login" />;
    }


    this.image = st.image;

    return (
      <div className="loginLayout">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <center>
            <Typography component="h1" variant="h5">
                Cập nhật thông tin cá nhân
              </Typography>
              <Avatar className="avatar1" alt="Remy Sharp" src={st.image} 
              style={{maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px', border: '2px solid #3F51B5'}}/> 
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
                    defaultValue={st.name}
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
                    defaultValue={st.phone}
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
                    defaultValue={st.username}
                    onChange={event => {
                      this.username = event.target.value;
                    }}
                    label="Username"
                    name="username"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    defaultValue={st.image}
                    onChange={event => {
                      this.image = event.target.value;
                    }}
                    disabled
                  />
                  <div className="wrap">
                  <Button className="btn">Đổi ảnh đại diện</Button>
                  <input
                    type="file"
                    name="file"
                    onChange={async e=>{
                      const {files} = e.target;
                      const data = new FormData();
                      data.append('file',files[0])
                      data.append('upload_preset','applon')
                      this.loading = true
                      // eslint-disable-next-line no-undef
                      const res = await fetch('https://api.cloudinary.com/v1_1/ddifartbn/image/upload',{
                        method: 'POST',
                        body: data
                      })
                      const file = await res.json()

                      this.image = file.url
                     
                      this.loading = false
                    }}/>
                  </div>
                  
                 
                </Grid>
              </Grid>
              <div className="Error">{this.err}</div>
              <div className="GridForm">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={(event) =>{
                    event.preventDefault();
                    st.updateUser(this.username, this.name, this.phone,this.image);
                    this.err = 'Cập nhật thành công';
                  }}>
                  Cập nhật
                </Button>
              </div>

              <div className="GridForm">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    window.location.href = '/changepass';
                  }}
                >
                  Đổi mật khẩu
                </Button>
              </div>
            </form>
          </div>
        </Container>
        <div className="user-info">
          <Button
            className="back-home"
            color="primary"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Quay về trang chủ
          </Button>
        </div>
      </div>
    );
  }
}
