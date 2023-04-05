
import './App.css';
import Todo from './components/Todo'
import Header from './components/Header'

const todoArray = [
  {
    name: "Bug Grocery"
  },
  {
    name: "Send Email"
  },
  {
    name: "Finish Assignment"
  },
  {
    name: "Write Blog"
  },
  {
    name: "Bake Cake"
  },]

function App() {
  return (
    <div className="App">
      <Header />
      <Todo
        todo={todoArray[0].name}
      />
      <Todo
        todo={todoArray[1].name}
      />
      <Todo
        todo={todoArray[2].name}
      />
      <Todo
        todo={todoArray[3].name}
      />
      <Todo
        todo={todoArray[4].name}
      />
    </div>
  );
}

export default App;
