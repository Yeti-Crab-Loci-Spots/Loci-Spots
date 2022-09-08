import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const LoginPage = (props) => {


  const githubAuth = () => {
    window.open('/auth/github', '_self');
  }
    
  return (
    <Box
      display = 'flex'
      marginTop = '20%'
      paddingBottom= '22%'
      justifyContent = 'center'
    >

      <Button className='login-button' onClick={githubAuth}>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
        Login with Github
      </Button>

    </Box>
  );
};

export default LoginPage;
