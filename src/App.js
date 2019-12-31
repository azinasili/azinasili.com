import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Home from './views/home/Home';
import Project from './views/project/Project';
import NotFound from './views/404/404';
import Info from './assets/data/info.json';
import Projects from './assets/data/projects.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header info={Info} />
            <main className="Main">
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} projects={Projects.projects} description={Info.desc} />} />
                <Route path="/portfolio/:name" render={(props) => <Project {...props} project={Projects.projects} />} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer info={Info} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;