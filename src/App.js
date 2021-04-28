import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Goal from './Components/Goal';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Loader from './Components/Loader';
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <Hero />
                <Goal />
                <Projects />
                <Skills />
              </Fragment>
            )}
          />
          <Route exact path='/about-me' component={About} />
        </Switch>
        {/* <Loader /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
