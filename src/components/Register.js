import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';


export default class SignUp extends React.PureComponent {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.name = '';
    this.phone = '';
    this.err = '';
  }

  render() {
    const st = this.props;
    
   
    if(st.isRegister === 'err'){
      this.err = 'Có lỗi xảy ra, vui lòng thử lại!!!';
    }
    if(st.isRegister === 'success'){
      this.err = 'Đăng ký thành công';
    }
    
    return (
      <div className="loginLayout">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <center>
              <Avatar className="avatar1">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
            </center>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    onChange={event => {
                      this.name = event.target.value;
                    }}
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="phone"
                    name="Phone"
                    variant="outlined"
                    required
                    fullWidth
                    id="Phone"
                    onChange={event => {
                      this.phone = event.target.value;
                    }}
                    label="Phone"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    onChange={event => {
                      this.username = event.target.value;
                    }}
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={event => {
                      this.password = event.target.value;
                    }}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <div className="ErrorRegister">{this.err}</div>
              <div className="GridForm">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={event => {
                    event.preventDefault();
                    st.Register(this.name,this.phone, this.username, this.password);
                    
                   
                    
                  }}>
                  Sign Up
                </Button>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
