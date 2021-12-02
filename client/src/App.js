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
import Loader from './components/shared/Loader/Loader';
import Alert from './components/shared/Alert/Alert';

import { Switch, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

import * as userService from "./services/user"
import { loader, logout, showAlert, signIn } from './actions';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const songs = useSelector(state => state.songs.songs)
  const isLoading = useSelector(state => state.load)
  const alert = useSelector(state => state.alert)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  useEffect(() => {
    dispatch(loader())
    userService.getUser()
      .then(data => {
        dispatch(loader())
        if (data) dispatch(signIn(data))
        else dispatch(logout())
      })
      .catch(e => {
        dispatch(loader())
        dispatch(showAlert(e.message))
        dispatch(logout())
      })
  }, [])


  const switchAside = () => {
    setIsAsideOpen(!isAsideOpen)
  }
  const closeAside = () => {
    setIsAsideOpen(false)
  }

  if (user) {
    return (
      <>
        <div className="app">
          <Aside isOpen={isAsideOpen} click={closeAside} />
          <div className="main-content">
            <Header click={switchAside} />
            <main className="main-content-container" onClick={closeAside}>
              <Switch>
                <Route path="/library/:category" component={Browse} exact />
                <Route path="/search/:category" component={Browse} exact />
                <Route path="/create/:category" component={Create} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/details/:category/:id" exact render={(props) => <Details isPlaying={isPlaying} setIsPlaying={setIsPlaying} {...props} />} />
                <Route path="*" component={Home} />
              </Switch>
            </main>
          </div>
        </div>
        <Footer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        {isLoading ? <Loader /> : ""}
        {alert.shown ? <Alert msg={alert.message} /> : ""}
      </>
    )
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/sign-up" component={Register} />
        <Route path="*" exact component={LandingPage} />
      </Switch>
      {isLoading ? <Loader /> : ""}
      {alert.shown ? <Alert msg={alert.message} /> : ""}
    </>
  );
}

export default App;
