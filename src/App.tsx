import { NewRoom } from "pages/NewRoom";
import { Home } from "pages/Home";
import { Room } from "pages/Room";

import { GlobalStyles } from "styles/global";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserStorage } from "contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </UserStorage>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
