import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Artists from "./components/Artists";
import Register from "./components/Register";
import Login from './components/Login'
import Logout from "./components/Logout";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/artists" Component={Artists} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/logout" Component={Logout} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
