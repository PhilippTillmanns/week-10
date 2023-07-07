import Landing from "./pages/landing";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GetUserData from "./components/HandleUserInformation";
import NoPage from "./pages/noPage";
import { useState, useEffect} from "react";

function App() {
  const Navigate = useNavigate();
  const [user] = useAuthState(auth);
  const baseUrl = "http://localhost:3000";

  const [currentPage, setCurrentPage] = useState("")

  //Detect if the user has already clicked on the button :)
  /*
  const [clickedButton, setClickedButton] = useState(false);
  function ChangeClickedButton(change){
    setClickedButton(change);
  }
  */

  function LoadPage(url){
    const nextWebsite = baseUrl + url;
    if(currentPage != nextWebsite){
      setCurrentPage(nextWebsite);
      Navigate(url);
    }
  }

  useEffect(() => {
    if(!user){
      LoadPage("/landing");
    }else{
        LoadPage("/home");
    }
  });
  

  return(
          <Routes>
            <Route path="/landing" element={<Landing></Landing>}/>
            <Route path="/home" element={<Home></Home>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
  );
}

export default App;