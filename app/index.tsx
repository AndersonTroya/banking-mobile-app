import { useState } from "react";
import Splash from "./src/screens/splash";
import Register from "./src/screens/register";
import Login from "./src/screens/login";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  if (showSplash){
    return <Splash onFinish={() => setShowSplash(false)}/>
  }

  return <Login/>
}