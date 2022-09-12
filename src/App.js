import './App.css';

const App = () => {
  return (
    <div className="App">
      <label>{window.electron.node()}</label>
      <button>click</button>
    </div>
  );
};

export default App;
