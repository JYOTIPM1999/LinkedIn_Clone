import { Box, TextField, Button, styled, Typography } from "@mui/material";

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

export const Login = () => {
  return (
    <Component>
      <Box>
        <Image src="image/blog.png" alt="blog" />
        <Wrapper>
          <TextField variant="standard" />
          <TextField variant="standard" />
          <LoginButton variant="contained">Login</LoginButton>
          <Typography style={{ textAlign: "center" }}>OR</Typography>
          <SignupButton>CREATE AN ACCOUNT</SignupButton>
        </Wrapper>
      </Box>
    </Component>
  );
};
