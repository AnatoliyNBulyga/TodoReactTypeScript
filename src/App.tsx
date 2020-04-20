import React from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

const App: React.FunctionComponent = () => {
  return (
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <TodoForm />
        </div>

      </React.Fragment>
  );
}

export default App;
