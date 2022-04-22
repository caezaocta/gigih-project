import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/tokenSlice";

const SignIn = () => {
  const CLIENT_ID = "b93052aaabb6487f931e67437afa174e";
  const REDIRECT_URI = "http://localhost:3000/home";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES =
    "playlist-modify-public playlist-read-private playlist-modify-private";

  const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = (
        hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token")) as string
      ).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    dispatch(login(token));
  }, []);

  const logout = () => {
    setToken(null);
    window.localStorage.setItem("token", "");
    dispatch(login(""));
  };

  return (
    <Grid display="flex" justifyContent="flex-end">
      {!token ? (
        <Button
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
          variant="contained"
          sx={[
            {
              "&:hover": {
                color: "#0047d6",
                backgroundColor: "white",
              },
              minWidth: 75,
              padding: "12px",
              height: 40,
              color: "white",
              backgroundColor: "#0047d6",
              borderRadius: "4px",
              textTransform: "none",
              fontSize: "13px",
              "&hover": {
                backgroundColor: "red",
              },
            },
          ]}
        >
          <PersonIcon sx={{ mr: 1 }} />
          Sign In
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={logout}
          sx={[
            {
              "&:hover": {
                color: "#0047d6",
                backgroundColor: "white",
              },
              minWidth: 75,
              padding: "12px",
              height: 40,
              color: "white",
              backgroundColor: "#0047d6",
              borderRadius: "4px",
              textTransform: "none",
              fontSize: "13px",
              "&hover": {
                backgroundColor: "red",
              },
            },
          ]}
        >
          <PersonIcon sx={{ mr: 1 }} />
          Logout
        </Button>
      )}
    </Grid>
  );
};

export default SignIn;
