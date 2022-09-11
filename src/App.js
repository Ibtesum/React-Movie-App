import './App.css';


const Person = () => {
  return(
    <div>
      <h1>hey</h1>
    </div>
  )
}

function App() {
  const name= 'John'
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>hello from {isNameShowing?name: 'something'}</h1>
      <Person />
    </div>
  );
}

export default App;
