import AllUsers from './component/AllUsers';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import NavBar from './component/NavBar';
 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/all" ><AllUsers/></Route>
        <Route exact path="/add"  ><AddUser/></Route>
        <Route exact path="/edit/:id" ><EditUser/></Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
