import React from 'react';
import { Button } from '@mui/material';

const LoginPage = (props) => {
  const githubAuth = () => {
    window.open('/auth/github', '_self');
  }
  
  return (
    <Button className='login-button' onClick={githubAuth}>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
      Login with Github
    </Button>
  );
};

export default LoginPage;
