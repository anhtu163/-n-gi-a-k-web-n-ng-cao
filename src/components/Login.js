import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.err = '';
  }

  responseGoogle(response) {
    console.log(response);
  }

  // responseFacebook(res) {
  //   const st = this.props;
  //   st.LoginFB(res)
  //   console.log(res);
  // }

  render() {
    const st = this.props;

    if (st.token === 'err') {
      this.err = 'Username hoặc Password không đúng!!!';
    }

    if (st.isLogin) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="loginLayout">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <center>
              <Avatar className="avatar">
                <LockOutlinedIcon className="LockOutlinedIcon" />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </center>
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={event => {
                  this.username = event.target.value;
                }}
                id="username"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={event => {
                  this.password = event.target.value;
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className="Remember"
              />
              <div className="Error">{this.err}</div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={event => {
                  event.preventDefault();
                //  console.log(this.username + "and" +this.password)
                  st.Login(this.username, this.password);
                  console.log(st.name)
                }}
              >
                Sign In
              </Button>
              <div
                style={{ display: 'flex', flexWrap: 'wrap'}}
              >
                <FacebookLogin
                  appId="385118689034200"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={(res) => {
                    st.LoginFB(res)
                  }}
                  cssClass="my-facebook-button-class"
                  icon="fa-facebook"
                  textButton = "&nbsp;&nbsp;Sign In with Facebook" 
                />

                <GoogleLogin
                  clientId="318049775744-uahm30auvob7k36qr4hjtvitlnsgmfid.apps.googleusercontent.com"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  className="btnGoogle">
                  <span>Sign In with Google</span>
                </GoogleLogin>
              </div>
              <Grid className="footer-login" container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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
