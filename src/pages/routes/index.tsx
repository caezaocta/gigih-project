import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import PlaylistPage from "../createplaylist";
import HomePage from "../welcomepage";
import { tokenState } from "../../modules/stateReduxModule";

function RoutesPage() {
  const token = useSelector((state: tokenState) => state.token.value);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/home">
          {token && <Redirect to="/create-playlist" />}
          <HomePage />
        </Route>

        <Route exact path="/create-playlist">
          {!token && <Redirect to="/home" />}
          <PlaylistPage />
        </Route>

        <Redirect from="*" to="/home" />
      </Switch>
    </div>
  );
}

export default RoutesPage;
