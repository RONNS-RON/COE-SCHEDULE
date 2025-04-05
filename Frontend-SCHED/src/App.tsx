import "./App.css";
import Login from "./Components/login";
function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to SchedCore</h1>
        <p>
          An Online Scheduling platform that exclusively in Naga College
          Foundation, Engineering Department.
        </p>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
