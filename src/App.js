import './App.css';
import Home from './components/Home';
import Navebar from './components/Navebar';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
     <Navebar/>
    <Switch/>
   <Route exact path="/" component={Home}/>
   <Route exact path="/products" component={Products}/>
    <Switch/>
    </>
  );
}

export default App;
