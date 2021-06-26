import { NewRoom } from "pages/NewRoom";
import { Home } from "pages/Home";
import { Room } from "pages/Room";
import { AdminRoom } from "pages/AdminRoom";

import { ThemeButton } from "components/Theme";

import { GlobalStyles } from "styles/global";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { UserStorage } from "contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </UserStorage>
      <Toaster position="bottom-center" />
      <ThemeButton />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
