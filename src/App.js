import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import AddressBook from "./Components/AddressBook";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> <Link to="/about">About us</Link>
          </nav>
        </div>
        <Route path="/" component={HomeScreen} exact default />
        <Route path="/about" component={AboutUs} />
        <Route path="/addressBook" component={AddressBook} />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
