import './App.css';
import {auth} from "./firebase/firebase";

const App = () => {
    console.log(auth);
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
