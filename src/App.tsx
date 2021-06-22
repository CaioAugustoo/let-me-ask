import { NewRoom } from "pages/NewRoom";
import { Home } from "pages/Home";

import { GlobalStyles } from "styles/global";

import { BrowserRouter, Route } from "react-router-dom";
import { UserStorage } from "contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </UserStorage>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
