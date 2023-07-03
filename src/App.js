import Login from "./components/Login";
import Landing from "./pages/landing";
import { isLoggedIn } from "./config/firebase";

function App() {

  if(isLoggedIn == true){
    return (
      <div>
        <h1>Logged In!</h1>
        <Login></Login>
      </div>
    );
  }else{
    return(
      <div>
        <h1>Logged Out!</h1>
      </div>
    )
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
