import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import About from "./pages/About";

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Navbar/>
        <div className="container">
            <Switch>
               <Route path="/" exact component={TodosPage} />
               <Route path="/about" component={About} />
            </Switch>
        </div>

      </BrowserRouter>
  );
}

export default App;
