import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: "100px",
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  height: 40px;
  border-radius: 3px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 8px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  color: gray;
  font-size: 15px;
  text-align: center;
`;

export const Login = () => {
  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState({
    name: "",
    username: "",
    password: "",
  });

  const toggleSignup = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: [e.target.value] });
  };

  const signupUser = () => {};

  
  return (
    <Component>
      <Box>
        <Image src="image/blog.png" alt="blog" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter User name" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter User name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account?
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};
