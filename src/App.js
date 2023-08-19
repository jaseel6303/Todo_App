//import logo from './logo.svg';
//import './App.css';

import { TodoApp } from "./component/TodoApp/TodoApp";

function App() {
  return (
    <div className="App">
        <TodoApp />
    </div>
  );
}

export default App;


// refactor 


/*
refactor 1
=============
class component to function component

const App = () => {
  return <TodoApp /> ;
};

simplify / optimize code
===========================

const App = () => <TodoApp />;


simplify / optimize code
============================
export default () => <TodoApp />;




*/