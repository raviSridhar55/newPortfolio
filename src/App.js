import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Goal from './Components/Goal';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Project from './Components/Pages/ProjectsPage';
import Blogs from './Components/Pages/Blogs';
import Loader from './Components/Loader';
import { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  if (loading === false) {
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
            <Route exact path='/project-page' component={Project} />
            <Route exact path='/blogs' component={Blogs} />
          </Switch>
          {/* <Loader /> */}
          <Footer />
        </div>
      </Router>
    );
  } else {
    return <Loader />;
  }
}

export default App;
