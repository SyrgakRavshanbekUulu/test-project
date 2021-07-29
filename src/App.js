import {Route, Switch} from 'react-router-dom';
import {ContactsPage, HomePage, AboutPage, ProjectsPage} from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/projects' exact component={ProjectsPage}/>
        <Route path='/contacts' exact component={ContactsPage}/>
      </Switch>
    </div>
  )
}

export default App;
