import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">

      <form onSubmit={}>
        <input type="email" name="email" id="" placeholder="Email"/>
        <br />
        <input type="password" name="password" id="" placeholder="password" />
      </form>
      <button type="submit">Register</button>
  
    </div>
  );
}

export default App;
