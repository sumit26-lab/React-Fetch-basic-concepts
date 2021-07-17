import logo from './logo.svg';
import './App.css';
import PageOne from './Compone/page/PageOne';
import Pagetwo from './Compone/page/Pagetwo';
import PageThree from './Compone/page/PageThree'
import {Route,Switch} from  'react-router-dom'
import Main_Navigation   from './Compone/Lyout_Link/Main_Navigation'
import { Layout } from './Compone/Layout/Layout';
function App() {
  return (
    <Layout>
    
    <Switch>

    <Route exact path="/">
    <PageOne/>

    </Route>
    <Route path="/Pagetwo">
     <Pagetwo/>

    </Route>
    <Route path="/PageThree">
    <PageThree/>

    </Route>
    </Switch>

    </Layout>
  );
}

export default App;
