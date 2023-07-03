import Landing from "./pages/landing";
import { auth } from "./config/firebase";

function App() {

  if(true){
    return (
      <div>
        <Landing/>
      </div>
    );
  }else{
    return(
      <div>
      <h1>Not Logged in!</h1>
      </div>
    )
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;