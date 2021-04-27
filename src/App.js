import './App.css';
import {Container, Grid} from '@material-ui/core'
import Profile from './Components/Profile/Profile'
import Header from './Components/Header/Header'
import Resume from './Pages/Resume/Resume'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'

import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Container className={'top_60'}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className='main_content'>
                <Redirect to='/Resume' />
              <Switch>
              <Route path='/Resume' component={Resume}>
                <Resume />
              </Route>
              <Route path='/Contact' component={Contact}>
                <Contact />
              </Route>
              </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
