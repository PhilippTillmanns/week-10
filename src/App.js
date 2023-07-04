import Landing from "./pages/landing";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import Cookies from 'universal-cookie';
import Home from "./pages/home";
import GetUserData from "./components/HandleUserInformation";
const cookies = new Cookies();

function App() {

  const [user] = useAuthState(auth);

  if(!user){
    return (
      <div>
        <Landing/>
      </div>
    );
  }
  else{
    GetUserData();
    return(
      <div>
        <Home></Home>
      </div>
    );
  }
}

export default App;