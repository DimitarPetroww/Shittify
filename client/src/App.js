import './App.css';

import Aside from "./components/Aside/Aside"
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import Browse from "./components/Browse/Browse"
import Login from "./components/Login/Login"
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import { Switch, Route } from "react-router-dom"
import { useState } from 'react';
import { useSelector } from "react-redux"


function App() {
  const isLogged = useSelector(state => state.auth)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const switchAside = () => {
    setIsAsideOpen(!isAsideOpen)
  }
  const closeAside = () => {
    setIsAsideOpen(false)
  }

  if (isLogged) {
    return (
      <>
        <div className="app">
          <Aside isOpen={isAsideOpen} click={closeAside} />
          <div className="main-content">
            <Header click={switchAside} />
            <main className="main-content-container" onClick={closeAside}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/library/:collection" component={Browse} />
                <Route path="/search/:category" component={Browse} />
                <Route path="/create/:category" component={Create} />
                <Route path="/profile" component={Profile} />
                <Route path="/details/:id">
                  <Details isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
        <Footer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </>
    )
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/sign-up" component={Register} />
      </Switch>
    </>
  );
}

export default App;
