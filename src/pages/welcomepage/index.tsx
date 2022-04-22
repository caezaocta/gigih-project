import Grid from "@mui/material/Grid";
import SignIn from "../../components/SignIn";
import Container from "@mui/material/Container";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <Grid>
        <SignIn></SignIn>
        <h1>Welcome Page</h1>
      </Grid>
    </Container>
  );
};

export default HomePage;
