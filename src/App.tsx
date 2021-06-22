import { NewRoom } from "pages/NewRoom";
import { Home } from "pages/Home";

import { GlobalStyles } from "styles/global";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
